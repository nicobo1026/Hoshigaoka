//=============================================================================
// NOM_CommonEventWithVariables.js  2022/06/26
// The MIT License (MIT)
//=============================================================================

/*:
 * @plugindesc コモンイベントをプラグインコマンドで呼び出す
 * @author Nomoa
 *
 * @help プラグインコマンドを利用して, コモンイベントの呼び出しと指定された変数への
 * 配列の代入を同時に行えます。
 * プラグインコマンドを使うと, 引数が配列として変数に代入された後, 自動的に対応する
 * コモンイベントが呼び出されます。
 * [プラグインコマンドの設定]から, プラグインコマンド名と, 紐づけされるコモンイベント
 * 番号, 変数番号を設定してください。
 * 
 * 
 *@param Common Event List
 * @text プラグインコマンドの設定
 * @desc 使用するプラグインコマンド名と, 紐づけされるコモンイベント番号, 変数番号を設定します。
 * @default
 * @type struct<CommonEventList>[]
 */

/*~struct~CommonEventList:
 *
 * @param PluginCommandName
 * @text プラグインコマンド名
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
 * @desc 配列を代入する変数
 * @type variable
 * @default
 * 
 */

(function() {

    "use strict";
    // プラグインパラメータの整形
    const pluginName = 'NOM_CommonEventWithVariables';
    const parameters =  PluginManager.parameters(pluginName);
    const commonEventList = JSON.parse(parameters['Common Event List'] || '[]').map(JSON.parse);

    // プラグインコマンドの設定
    const _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function (command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);
        
        //argumentsの型の整理 (文字列であれば文字列, 数値の文字列ならば数字に変換)
        for(var i = 0; i < args.length; i++) {
            if (isNaN(args[i]) == false ) {
                args[i] = parseInt(args[i]);
            };
        };

        for(var i = 0; i < commonEventList.length; i++){
            if (command === commonEventList[i].PluginCommandName) {
                $gameVariables.setValue(commonEventList[i].VariableID, args);
                this.setupChild($dataCommonEvents[commonEventList[i].CommonEventID].list, 0);
            };
        };
    };

})();