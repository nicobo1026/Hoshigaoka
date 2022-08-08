//=============================================================================
// MessageCommonTextPlus.js
// ----------------------------------------------------------------------------
// Copyright (c) 2015-2017 Triacontane, 2022 Nomoa
// This software is released under the MIT License.
// http://opensource.org/licenses/mit-license.php
// ----------------------------------------------------------------------------
// Version
// 1.0.0 2017/05/02 初版
// ----------------------------------------------------------------------------
// [Blog]   : http://triacontane.blogspot.jp/
// [Twitter]: https://twitter.com/triacontane/
// [GitHub] : https://github.com/triacontane/
//=============================================================================

/*:
 * @plugindesc MessageCommonPlugin
 * @author triacontane, Nomoa
 *
 * @help メッセージの表示中にコモンイベントを呼び出します。
 * コモンイベントは並列扱いで実行されます。
 *
 * 以下の制御文字を含めて「文章の表示」を実行してください。
 * \CE[1] # コモンイベント[1]を実行します。
 *
 * このプラグインにはプラグインコマンドはありません。
 *
 * This plugin is released under the MIT License.
 */
/*:ja
 * @plugindesc メッセージコモンプラグイン
 * @author トリアコンタン
 *
 * @help メッセージの表示中にコモンイベントを呼び出します。
 * コモンイベントは並列扱いで実行されます。
 *
 * 以下の制御文字を含めて「文章の表示」を実行してください。
 * \CE[1] # コモンイベント[1]を実行します。
 *
 * このプラグインにはプラグインコマンドはありません。
 *
 * 利用規約：
 *  作者に無断で改変、再配布が可能で、利用形態（商用、18禁利用等）
 *  についても制限はありません。
 *  このプラグインはもうあなたのものです。
 * 
 * @param Escape Character List
 * @text 制御文字の設定
 * @desc 制御文字の[]内の文字と対応させるコモンイベント番号を設定します。
 * @default
 * @type struct<EscapeCharacterList>[]
 */
/*~struct~EscapeCharacterList:
 *
 * @param EscapeCharacter
 * @text 制御文字の名前
 * @desc 英数字で設定してください。
 * @type string
 * @default
 * 
 * @param CommonEventID
 * @text コモンイベント番号
 * @desc 紐づけされるコモンイベント
 * @type common_event
 * @default
 * 
 * @param VariableID
 * @text 変数番号
 * @desc 制御文字のパラメーターを入れる変数
 * @type variable
 * @default
 */

(function() {
    'use strict';

    // プラグインパラメータの整形
    const pluginName = 'MessageCommonTextPlus';
    const parameters =  PluginManager.parameters(pluginName);
    const EscapeCharacterList = JSON.parse(parameters['Escape Character List'] || '[]').map(JSON.parse);
    //=============================================================================
    // Game_System
    //  メッセージコモンイベントを更新します。
    //=============================================================================
    Game_System.prototype.addMessageCommonEvents = function(id) {
        if (!this._messageCommonEvents) {
            this._messageCommonEvents = [];
        }
        var interpreter = new Game_Interpreter();
        interpreter.setup($dataCommonEvents[id].list);
        this._messageCommonEvents.push(interpreter);
    };

    Game_System.prototype.updateMessageCommonEvents = function() {
        if (!this._messageCommonEvents || this._messageCommonEvents.length === 0) return;
        this._messageCommonEvents.forEach(function(interpreter) {
            interpreter.update();
        });
        this._messageCommonEvents = this._messageCommonEvents.filter(function(interpreter) {
            return interpreter.isRunning();
        });
    };

    //=============================================================================
    // Window_Message
    //  メッセージコモンイベントを呼び出します。
    //=============================================================================

    Window_Base.prototype.obtainEscapeParamEx = function(textState) {
        //var arr = /^\[\d+\]/.exec(textState.text.slice(textState.index));
        var arr2 = /^\[.+?]/.exec(textState.text.slice(textState.index));
        if (arr2) {
            textState.index += arr2[0].length;
            return arr2[0].slice(1).slice(0, -1);
        } else {
            return '';
        }
    };


    var _Window_Message_processEscapeCharacterEx = Window_Message.prototype.processEscapeCharacter;
    Window_Message.prototype.processEscapeCharacter = function(code, textState) {
        if (code === 'CT') {
            this.callMessageCommonEx(this.obtainEscapeParamEx(textState));
            return;
        }
        _Window_Message_processEscapeCharacterEx.apply(this, arguments);
    };

    Window_Message.prototype.callMessageCommonEx = function(commonEventName) {
        var matchedCommonEvent = EscapeCharacterList.find( ({ EscapeCharacter }) => EscapeCharacter === commonEventName );
        $gameVariables.setValue(parseInt(matchedCommonEvent.VariableID), commonEventName);
        $gameSystem.addMessageCommonEvents(parseInt(matchedCommonEvent.CommonEventID));
    };

    var _Window_Message_updateEx = Window_Message.prototype.update;
    Window_Message.prototype.update = function() {
        $gameSystem.updateMessageCommonEvents();
        _Window_Message_updateEx.apply(this, arguments);
    };
})();

