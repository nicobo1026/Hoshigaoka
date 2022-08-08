// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"--システム系--------------","status":true,"description":"---------------------------------------------------------------","parameters":{}},
{"name":"Community_Basic","status":true,"description":"基本的なパラメーターを設定するプラグインです。","parameters":{"cacheLimit":"20","screenWidth":"1280","screenHeight":"720","changeWindowWidthTo":"1280","changeWindowHeightTo":"720","renderingMode":"auto","alwaysDash":"on","textSpeed":"1","autoSaveFileId":"0","errorMessage":"エラーが発生しました。ゲームの作者にご連絡ください。","showErrorDetail":"true","enableProgressBar":"true","maxRenderingFps":"0"}},
{"name":"ChangeTileSize","status":false,"description":"Allows maps based on a grid size other than 48x48","parameters":{"Tile Size":"32","Tileset Image Folder":"img/tilesetsVXA/","Parallax Image Folder":"img/parallaxes/"}},
{"name":"PixiApngAndGif","status":true,"description":"","parameters":{}},
{"name":"AudioStreaming","status":true,"description":"音声読み込みを高速化し、oggファイルのみを使用します。","parameters":{"mode":"10","deleteM4a":"false"}},
{"name":"DataCacheBlocker","status":true,"description":"キャッシュを阻止します。（dataフォルダのみ）","parameters":{}},
{"name":"FixImageLoading","status":true,"description":"画像ロード時のチラつき防止プラグイン","parameters":{}},
{"name":"RelativeTouchPad","status":true,"description":"相対タッチパッドプラグイン","parameters":{"タッチ有効領域":"0,0,1104,624","パッド画像ファイル":"system_controller_pad","アロー画像ファイル":"system_controller_arrow","パッド画像不透明度":"255"}},
{"name":"MPP_SimpleTouch3","status":true,"description":"【ver.3.19】マウスやタッチ操作を変更します。","parameters":{"Cancel Enabled?":"true","Double Tap Interval":"30","Cursor SE Always?":"false","Scroll Warp?":"false","Scroll Warp SE":"{\"Name\":\"\",\"Volume\":\"90\",\"Pitch\":\"100\",\"Pan\":\"0\"}","Smooth Scroll?":"false","=== Default ===":"","Long Press Time":"12","Select Type Default":"1","Ok Type Default":"1","Outside Tap Default":"0","=== Option ===":"","Long Press Name":"","Select Type Name":"","Select Type Status":"[\"タッチ\",\"追従\"]","Ok Type Name":"決定操作","Ok Type Status _v3":"[\"デフォルト\",\"シングル\",\"ダブル\"]","Outside Tap Name":"","Outside Tap Status _v3":"[\"無効\",\"キャンセル\"]","=== Command ===":"","Plugin Commands":"{\"CancelOff\":\"CancelOff\"}"}},
{"name":"NRP_EventFastForward","status":false,"description":"v1.00 イベント高速化機能を拡張します。","parameters":{"FastKey":"","SpeedMultiply":"8","SpeedVariableId":"","PressWait":"24","<Touch>":"","TouchSpeedMultiply":"","TouchSpeedVariableId":"","TouchPressWait":""}},
{"name":"MpiSavedataImportExport","status":false,"description":"セーブデータインポート・エクスポートプラグイン","parameters":{"Style Sheet File":"./css/savedata-import-export.css","Background Image":"","Ok Cancel Button":"\"決定\", \"キャンセル\", 520, 510","Window-1":"\"セーブデータのインポート・エクスポート\", 0, 0, 816, 72","Window-2":"","Window-3":"","Window-4":""}},
{"name":"TN_SpriteExtender","status":true,"description":"【有償ライセンス】任意の比率で歩行グラフィックの胴体を引き伸ばし、頭身を上げます。","parameters":{"bodyRate":"1.42","headRange":"14","exclude_P":"!,Damage","exclude_E":"Nature,Monster,Vehicle"}},
{"name":"--------------------------","status":true,"description":"---------------------------------------------------------------","parameters":{}},
{"name":"--デバッグ系--------------","status":true,"description":"---------------------------------------------------------------","parameters":{}},
{"name":"AdjustPictureGraphical","status":true,"description":"ピクチャのグラフィカルな位置調整プラグイン。\r\nパラメータを変更したら「プロジェクトの保存」（Ctrl+S）","parameters":{"グリッドサイズ":"48","テストマップID":"-1"}},
{"name":"--------------------------","status":true,"description":"---------------------------------------------------------------","parameters":{}},
{"name":"--シーン用----------------","status":true,"description":"---------------------------------------------------------------","parameters":{}},
{"name":"LoadingExtend","status":true,"description":"ロード中画像拡張プラグイン","parameters":{"イメージ列数":"4","イメージ行数":"1","表示タイプ":"2","アニメーション間隔":"10","表示位置X座標":"","表示位置Y座標":"","待機フレーム数":"10","点滅なし":"ON"}},
{"name":"DTextPicture","status":true,"description":"動的文字列ピクチャ生成プラグイン","parameters":{"itemIconSwitchId":"0","lineSpacingVariableId":"0","frameWindowSkin":"","frameWindowPadding":"18","padCharacter":"0"}},
{"name":"DWindow","status":true,"description":"動的ウィンドウ生成プラグイン","parameters":{"X座標の変数番号":"0","Y座標の変数番号":"0","横幅の変数番号":"0","高さの変数番号":"0","最前面に表示":"false","ピクチャに含める":"0"}},
{"name":"111_InputForm","status":true,"description":"ゲーム画面上にHTMLの入力フォームを表示します","parameters":{"OK Button Text":"OK","Display Cancel Button":"0","Cancel Button Text":"✕","Judge Switch Interval":"100","Switch ID Selected OK":"0","Force OK Switch ID":"0","Force Cancel Switch ID":"0"}},
{"name":"TMEventItemEx","status":true,"description":"アイテム選択の処理にヘルプウィンドウを追加し、\n個数表示の有無と表示行数をアイテムタイプごとに設定できます。","parameters":{"helpWindowEnabledItem":"1","helpWindowEnabledKey":"1","helpWindowEnabledA":"1","helpWindowEnabledB":"1","showItemNumberItem":"0","showItemNumberKey":"0","showItemNumberA":"0","showItemNumberB":"0","numVisibleRowsItem":"4","numVisibleRowsKey":"3","numVisibleRowsA":"3","numVisibleRowsB":"3","fixPlacement":"bottom"}},
{"name":"Gacha","status":false,"description":"ランダムにアイテムを取得します。","parameters":{"Help Message Text":"【期間限定】なつちゃんガチャ!!","Button Text":"1回引く","Button Text 10 Time":"10回引く","Button Text All":"","Get Message Text":"Item Name","Min Rank Variable":"0","Min Rank Variable 10 Time":"0","Show Item Description":"0","New Item Notice":"\\C[2]New!!\\C[0]","Effect":"1","Rank1 Effect":"2","Rank2 Effect":"3","Rank3 Effect":"4","Rank4 Effect":"5","Rank5 Effect":"6","New Effect":"-1","ME":"Victory1","Required Amount":"850","Required Variable":"0","Cost Unit":"回","Effect Stop Switch":"0","SE":"Item3","Back Image":"img_bg_Gacha_natsu"}},
{"name":"GachaBook","status":false,"description":"ガチャアイテム一覧を表示します。","parameters":{"Unknown Data":"??????","Price Text":"Price","Equip Text":"Equip","Type Text":"Type","Rank Text":"Rank","Simple Display":"0"}},
{"name":"--------------------------","status":true,"description":"---------------------------------------------------------------","parameters":{}},
{"name":"--タイトル系--------------","status":true,"description":"---------------------------------------------------------------","parameters":{}},
{"name":"TMLinkCredit","status":true,"description":"タイトル画面にクレジットコマンドを追加します。\r\n制作スタッフの紹介をWebサイトへのリンク付きで表示できます。","parameters":{"credits":"[\"{\\\"name\\\":\\\"トリアコンタン 様\\\",\\\"help\\\":\\\"プラグイン素材\\\",\\\"url\\\":\\\"https://triacontane.blogspot.com/\\\"}\",\"{\\\"name\\\":\\\"tomoaky 様\\\",\\\"help\\\":\\\"プラグイン素材\\\",\\\"url\\\":\\\"https://twitter.com/tomoaky\\\"}\",\"{\\\"name\\\":\\\"lunatlazur 様\\\",\\\"help\\\":\\\"プラグイン素材\\\",\\\"url\\\":\\\"https://lunatlazur.com/\\\"}\",\"{\\\"name\\\":\\\"溟犬一六 様\\\",\\\"help\\\":\\\"プラグイン素材\\\",\\\"url\\\":\\\"https:/star-write-dream.com\\\"}\",\"{\\\"name\\\":\\\"ペンギンの寝床 様\\\",\\\"help\\\":\\\"プラグイン素材\\\",\\\"url\\\":\\\"http://woodpenguin.blog.fc2.com/\\\"}\",\"{\\\"name\\\":\\\"ツキミ 様\\\",\\\"help\\\":\\\"プラグイン素材\\\",\\\"url\\\":\\\"https://forum.tkool.jp/index.php?threads/%E3%80%90%E3%83%97%E3%83%A9%E3%82%B0%E3%82%A4%E3%83%B3%E3%80%91%E3%83%84%E3%82%AD%E3%83%9F%E5%BC%8F%E9%81%B8%E6%8A%9E%E8%82%A2%E3%82%A6%E3%82%A3%E3%83%B3%E3%83%89%E3%82%A6.750/\\\"}\",\"{\\\"name\\\":\\\"きまぐれアフター 様\\\",\\\"help\\\":\\\"\\\",\\\"url\\\":\\\"\\\"}\"]","versionText":"{\"text\":\"ver0.0.1β\",\"x\":\"2\",\"y\":\"2\",\"fontSize\":\"24\",\"textColor\":\"#ffffff\",\"outlineWidth\":\"4\",\"outlineColor\":\"#000000\"}","licenseText":"{\"text\":\"© NPC 2022\",\"x\":\"0\",\"y\":\"570\",\"fontSize\":\"24\",\"textColor\":\"#ffffff\",\"outlineWidth\":\"4\",\"outlineColor\":\"#000000\"}","creditsCommand":"クレジット","itemHeight":"84","helpFontSize":"16","urlFontSize":"16","urlMaxLength":"50","useHelpWindow":"true","helpWindowText":"使用させていただいた素材の作者一覧です。\\n","titleCommandAlign":"center"}},
{"name":"TitleNewGameOnly","status":true,"description":"ニューゲームオンリープラグイン","parameters":{"startString":"ゲーム開始","font":"{\"name\":\"\",\"size\":\"40\",\"bold\":\"false\",\"italic\":\"false\",\"color\":\"rgba(255,255,255,1.0)\"}","fileExistAction":"0","soundEffect":"{\"name\":\"nc123625_puni\",\"volume\":\"30\",\"pitch\":\"100\",\"pan\":\"0\"}","adjustY":"0"}},
{"name":"LL_SprashScreenMV","status":true,"description":"スプラッシュスクリーンを表示します。","parameters":{"splashImages":"[]","skipEnabled":"true","debugDisabled":"false","jingleSettings":"","meName":"","meVolume":"90","mePitch":"100","mePan":"0"}},
{"name":"--------------------------","status":true,"description":"---------------------------------------------------------------","parameters":{}},
{"name":"--文章ウィンドウ系--------","status":true,"description":"---------------------------------------------------------------","parameters":{}},
{"name":"YEP_MessageCore","status":true,"description":"メッセージの表示方法や機能をカスタマイズすることができます。","parameters":{"---一般---":"","Default Rows":"3","Default Width":"Graphics.boxWidth - 250","Face Indent":"Window_Base._faceWidth + 24","Fast Forward":"Input.isPressed('pagedown')","Word Wrapping":"false","Description Wrap":"false","---フォント---":"","Font Name":"GameFont","Font Size":"32","Font Size Change":"6","Font Changed Max":"96","Font Changed Min":"12","---Name Box---":"","Name Box Buffer X":"-28","Name Box Buffer Y":"0","Name Box Padding":"this.standardPadding() * 4","Name Box Color":"0","Name Box Clear":"false","Name Box Added Text":"\\c[6]"}},
{"name":"NOM_MessageWindowPosition","status":true,"description":"メッセージウィンドウ位置調整プラグイン","parameters":{}},
{"name":"WindowBlinkStop","status":true,"description":"ウィンドウ点滅停止プラグイン","parameters":{}},
{"name":"MessageSkip","status":true,"description":"メッセージスキッププラグイン","parameters":{"スキップキー":"S","オートキー":"A","スキップスイッチ":"0","オートスイッチ":"0","スキップアイコン":"140","オートアイコン":"75","アイコンX":"0","アイコンY":"0","押し続けスキップ":"false","オート待機フレーム":"100 + textSize * 10","終了解除スイッチID":"0","スキップピクチャ":"img_sys_button_skip","スキップピクチャX":"827","スキップピクチャY":"8","オートピクチャ":"img_sys_button_auto","オートピクチャX":"755","オートピクチャY":"8","スイッチピクチャ":"","スイッチピクチャトリガー":"0","スイッチピクチャX":"750","スイッチピクチャY":"0","ボタン原点":"0","ボタン表示スイッチID":"12","ピクチャ座標タイプ":"absolute","無効化スイッチ":"0"}},
{"name":"ChangeWindowTouchPolicy","status":true,"description":"ウィンドウタッチ仕様変更プラグイン","parameters":{"枠外タッチ動作":"なし"}},
{"name":"InvalidClickOutsideMessageWindow","status":true,"description":"「文章の表示...」イベントコマンドにおいて、ウインドウ外のクリックを無効にします。","parameters":{}},
{"name":"MessageTriggerSe","status":true,"description":"メッセージ送りSEプラグイン","parameters":{"validateSwitchId":"0","soundEffect":"{\"name\":\"se_system_cursor\",\"volume\":\"30\",\"pitch\":\"60\",\"pan\":\"0\"}","doseContinueOnly":"true"}},
{"name":"Lunatlazur_ConfigurableMessageClosing","status":false,"description":"メッセージ表示継続プラグイン","parameters":{}},
{"name":"PlayMsgWndCharSE","status":false,"description":"メッセージウィンドウで文字ごとにSEを演奏します。","parameters":{"default SE":"1","battle default SE":"0","interval":"2","name1":"Cursor1","volume1":"90","pitch1":"100","name2":"Cursor2","volume2":"75","pitch2":"125"}},
{"name":"TextDecoration","status":true,"description":"ウィンドウテキストの装飾方法を変更します。","parameters":{"Mode":"3","Red":"0","Green":"0","Blue":"0","Alpha":"80"}},
{"name":"aligncenter","status":true,"description":"メッセージボックスの文字を中央揃い、右揃いにするプラグインです。","parameters":{}},
{"name":"MessageCommon","status":true,"description":"メッセージコモンプラグイン","parameters":{}},
{"name":"MessageCommonTextPlus","status":true,"description":"メッセージコモンプラグイン","parameters":{"Escape Character List":"[\"{\\\"EscapeCharacter\\\":\\\"nico\\\",\\\"CommonEventID\\\":\\\"33\\\",\\\"VariableID\\\":\\\"97\\\"}\",\"{\\\"EscapeCharacter\\\":\\\"amamiya\\\",\\\"CommonEventID\\\":\\\"33\\\",\\\"VariableID\\\":\\\"97\\\"}\",\"{\\\"EscapeCharacter\\\":\\\"ichinose\\\",\\\"CommonEventID\\\":\\\"33\\\",\\\"VariableID\\\":\\\"97\\\"}\",\"{\\\"EscapeCharacter\\\":\\\"usumi\\\",\\\"CommonEventID\\\":\\\"33\\\",\\\"VariableID\\\":\\\"97\\\"}\",\"{\\\"EscapeCharacter\\\":\\\"umeyama\\\",\\\"CommonEventID\\\":\\\"33\\\",\\\"VariableID\\\":\\\"97\\\"}\",\"{\\\"EscapeCharacter\\\":\\\"asagake\\\",\\\"CommonEventID\\\":\\\"33\\\",\\\"VariableID\\\":\\\"97\\\"}\",\"{\\\"EscapeCharacter\\\":\\\"secret\\\",\\\"CommonEventID\\\":\\\"33\\\",\\\"VariableID\\\":\\\"97\\\"}\",\"{\\\"EscapeCharacter\\\":\\\"ibuki\\\",\\\"CommonEventID\\\":\\\"33\\\",\\\"VariableID\\\":\\\"97\\\"}\",\"{\\\"EscapeCharacter\\\":\\\"hayami\\\",\\\"CommonEventID\\\":\\\"33\\\",\\\"VariableID\\\":\\\"97\\\"}\",\"{\\\"EscapeCharacter\\\":\\\"teacher\\\",\\\"CommonEventID\\\":\\\"33\\\",\\\"VariableID\\\":\\\"97\\\"}\",\"{\\\"EscapeCharacter\\\":\\\"noName\\\",\\\"CommonEventID\\\":\\\"33\\\",\\\"VariableID\\\":\\\"97\\\"}\"]"}},
{"name":"PauseSignToTextEnd","status":true,"description":"ポーズサインの末尾表示プラグイン","parameters":{"有効スイッチ番号":"11","非表示スイッチ番号":"0"}},
{"name":"LL_GalgePauseSignMV","status":false,"description":"ノベルゲーム風改行カーソルプラグイン","parameters":{"imageName":"MessageWindowCursor","animation":"rotation","positionType":"textEnd","positionX":"0","positionY":"0"}},
{"name":"MessageBackGroundStd","status":true,"description":"メッセージウィンドウ背景のデフォルト値を指定するプラグイン","parameters":{"背景タイプ":"2"}},
{"name":"--------------------------","status":true,"description":"---------------------------------------------------------------","parameters":{}},
{"name":"--マップ系----------------","status":true,"description":"---------------------------------------------------------------","parameters":{}},
{"name":"TerraxLighting","status":false,"description":"v1.5.1 Creates an extra layer that darkens a map and adds lightsources!","parameters":{"Player radius":"400","Add to options":"Yes","Option menu entry":"光の描画","Reset Lights":"No","Save DaynightHours":"0","Save DaynightMinutes":"0","Save DaynightSeconds":"0","Flashlight offset":"0","Screensize X":"1104","Screensize Y":"624","Kill Switch":"No"}},
{"name":"smoothscroll","status":false,"description":"カメラの移動を滑らかにするプラグインです。","parameters":{}},
{"name":"HalfMove","status":true,"description":"半歩移動プラグイン","parameters":{"8方向移動":"true","8方向移動スイッチ":"0","イベントすり抜け":"true","強制中無効":"false","角回避":"true","斜め移動中減速":"false","トリガー拡大":"false","実歩数調整":"false","上半分移動不可地形":"[\"0\"]","上半分移動不可Region":"[\"21\"]","下半分移動不可地形":"[\"0\"]","下半分移動不可Region":"[\"22\"]","右半分移動不可地形":"[\"0\"]","右半分移動不可Region":"[\"0\"]","左半分移動不可地形":"[\"0\"]","左半分移動不可Region":"[\"0\"]","右上移動不可地形":"[\"0\"]","右上移動不可Region":"[\"0\"]","右下移動不可地形":"[\"0\"]","右下移動不可Region":"[\"0\"]","左上移動不可地形":"[\"0\"]","左上移動不可Region":"[\"0\"]","左下移動不可地形":"[\"0\"]","左下移動不可Region":"[\"0\"]","全方向移動不可地形":"[\"0\"]","全方向移動不可Region":"[\"0\"]","イベント複数起動防止":"false","イベント位置重複OK":"false"}},
{"name":"MKR_PlayerMoveForbid","status":false,"description":"(v1.0.5) プレイヤー移動禁止プラグイン","parameters":{"Default_Move_Flag":"21","Default_Menu_Flag":"false","Enter Flag":"true"}},
{"name":"CommonPopupCore","status":true,"description":"ver1.02/汎用的なポップアップの仕組みを提供するためのベースプラグインです。","parameters":{"Text Back Color":"rgba(0,0,0,0.6)","Text Back FileName":"popup_back%d"}},
{"name":"GetInformation","status":false,"description":"ver1.05/アイテムの入手などにスライドアニメするインフォメーションを追加するプラグインです。","parameters":{"Info Disable Switch Id":"0","Use Battle Info":"true","Use Rewards Info":"true","Info Font Size":"16","Info Count":"120","Info Delay":"20","Info MoveWait":"100","Info MoveFade":"10","Info Position":"","Info Slide Action":"","Info Sup X":"0","Info Sup Y":"0","Gold Icon Index":"361","Get Gold Text":"「\\I[_icon]_num\\C[14]\\G\\C[0]」 を\\C[24]手に入れた！","Lost Gold Text":"「\\I[_icon]_num\\C[14]\\G\\C[0]」 を\\C[2]失った・・・","Get Item Text":"「\\I[_icon]_name」 を\\C[24]手に入れた！\\n\\C[6]_desc1","Lost Item Text":"「\\I[_icon]_name」 を\\C[2]失った・・・\\n\\C[6]_desc1","Get Item Text Num":"「\\I[_icon]_name」 を\\C[14]_num個\\C[24]手に入れた！\\n\\C[6]_desc1","Lost Item Text Num":"「\\I[_icon]_name」を\\C[14]_num個\\C[2]失った・・・\\n\\C[6]_desc1","Get Skill Text":"_actorは「\\I[_icon]_name」 を\\C[24]覚えた！\\n\\C[6]_desc1","Lost Skill Text":"_actorは「\\I[_icon]_name」を \\C[2]忘れてしまった・・・\\n\\C[6]_desc1","Exp Up Text":"_actorは\\C[14]_numポイント\\C[0]の\\C[4]_name\\C[0]を\\C[24]得た！","Exp Down Text":"_actorは\\C[14]_numポイント\\C[0]の\\C[4]_name\\C[0]を\\C[2]失った・・・","Lv Up Text":"_actorは\\C[4]_name\\C[0]が\\C[14]_numポイント\\C[24]上がった！","Lv Down Text":"_actorは\\C[4]_name\\C[0]が\\C[14]_numポイント\\C[2]下がった・・・","Param Up Text":"_actorは\\C[4]_name\\C[0]が\\C[14]_numポイント\\C[24]上がった！","Param Down Text":"_actorは\\C[4]_name\\C[0]が\\C[14]_numポイント\\C[2]下がった・・・","Abp Up Text":"_actorは\\C[14]_numポイント\\C[0]の\\C[4]_name\\C[0]を\\C[24]得た！","Abp Down Text":"_actorは\\C[14]_numポイント\\C[0]の\\C[4]_name\\C[0]を\\C[2]失った・・・","Class Lv Up Text":"_actorは\\C[4]_classの_name\\C[0]が\\C[14]_numポイント\\C[24]上がった！","Class Lv Down Text":"_actorは\\C[4]_classの_name\\C[0]が\\C[14]_numポイント\\C[2]下がった・・・"}},
{"name":"PopupMessage","status":true,"description":"メッセージの表示をポップアップに変更する制御文字_pum[delay]を追加します。","parameters":{"Pop Message FontSize":"28","Pop Message Count":"200"}},
{"name":"NOM_DestImageCustomize","status":true,"description":"目的地画像カスタマイズプラグイン","parameters":{"不透明度":"255","合成方法":"0","表示色":"","独自画像":"system_clickTarget"}},
{"name":"TMNamePop","status":true,"description":"イベントの頭上に文字列を表示する機能を追加します。","parameters":{"backOpacity":"96","fontSize":"18","fontOutlineWidth":"2","fontOutlineColor":"rgba(0, 0, 0, 0.5)","width":"160","useRoundRect":"0","roundRectRadius":"6"}},
{"name":"DP_MapZoom","status":true,"description":"マップの拡大率を制御します。","parameters":{"Base Scale":"1.5","Encount Effect":"true","Camera Controll":"true","Weather Patch":"true","Picture Size Fixation":"true","Old Focus":"false","Easing Function":"t"}},
{"name":"CharacterGraphicExtend","status":true,"description":"キャラクターグラフィック表示拡張プラグイン","parameters":{"イベント消去無効":"false"}},
{"name":"--------------------------","status":true,"description":"---------------------------------------------------------------","parameters":{}},
{"name":"--選択系----------------","status":true,"description":"---------------------------------------------------------------","parameters":{}},
{"name":"MPP_ChoiceEX","status":true,"description":"【ver.3.11】選択肢の機能拡張","parameters":{"maxPageRow":"10","Disabled Index":"none","=== Command ===":"","Plugin Commands":"{\"ChoicePos\":\"ChoicePos\",\"ChoiceVariableId\":\"ChoiceVariableId\",\"ChoiceRect\":\"ChoiceRect\",\"ChoiceUnderMessage\":\"ChoiceUnderMessage\"}","Event Comment":"{\"ChoiceHelp\":\"選択肢ヘルプ\"}"}},
{"name":"MPP_ChoiceAlign","status":true,"description":"選択肢に文字揃えを行う機能を追加します。","parameters":{}},
{"name":"LL_GalgeChoiceWindowMV","status":false,"description":"ノベルゲーム風選択肢ウィンドウプラグイン","parameters":{"imageDeleteGuardList":"[]"}},
{"name":"EventItemCondition","status":false,"description":"アイテム選択の表示条件プラグイン","parameters":{"DefaultVisible":"true","RefreshSwitchId":"0","TextColor":"0"}},
{"name":"GALV_VisualNovelChoices","status":true,"description":"(v.1.6) Changes how the \"Choice\" message boxes display to appear more like visual novels.","parameters":{"Command Width":"720","Command Height":"68","Always Middle":"false","Message Gap":"150","Disabled Button":"3"}},
{"name":"--------------------------","status":true,"description":"---------------------------------------------------------------","parameters":{}},
{"name":"--メニュー系---------------","status":true,"description":"---------------------------------------------------------------","parameters":{}},
{"name":"TMBackButton","status":true,"description":"メニューシーンにタップ操作用の戻るボタンを表示します。","parameters":{"buttonImage":"backButton","sceneMenuX":"0","sceneMenuY":"0","sceneItemX":"0","sceneItemY":"0","sceneSkillX":"0","sceneSkillY":"0","sceneEquipX":"0","sceneEquipY":"0","sceneStatusX":"0","sceneStatusY":"0","sceneOptionsX":"0","sceneOptionsY":"0","sceneSaveX":"1043","sceneSaveY":"12","sceneLoadX":"0","sceneLoadY":"0","sceneGameEndX":"0","sceneGameEndY":"0","sceneShopX":"0","sceneShopY":"0","sceneNameX":"0","sceneNameY":"0"}},
{"name":"CustomizeConfigItem","status":false,"description":"オプション任意項目作成プラグイン","parameters":{"数値項目":"","文字項目":"","スイッチ項目":"","音量項目":""}},
{"name":"NRP_ChangeCharacterSpeed","status":false,"description":"v1.01 キャラクターの移動速度を細かく変更します。","parameters":{"DefaultAlwaysDash":"","PlayerSpeed":"","PlusSpeedDash":"","<BasicSpeedRate>":"","PlayerBasicSpeedRate":"100","EventBasicSpeedRate":"100","<Vehicles>":"","BoatSpeed":"","ShipSpeed":"","AirShipSpeed":""}},
{"name":"--------------------------","status":true,"description":"---------------------------------------------------------------","parameters":{}},
{"name":"--音声系-----------------","status":true,"description":"---------------------------------------------------------------","parameters":{}},
{"name":"HTN_CrossFadeBgm","status":true,"description":"BGMをクロスフェード","parameters":{"Default Fade Duration Sec":"2","Start From Zero":"true"}},
{"name":"SRD_AudioFader","status":true,"description":"BGM、BGS、MEオーディオエフェクトの音量フェードをより細かにコントロールできます。","parameters":{"Replay Fade Time":"30","Auto-BGM Fade In":"0"}},
{"name":"--------------------------","status":true,"description":"---------------------------------------------------------------","parameters":{}},
{"name":"--イベント系--------------","status":true,"description":"---------------------------------------------------------------","parameters":{}},
{"name":"MenuCommonEvent","status":false,"description":"メニュー内コモンイベントプラグイン","parameters":{"コモンイベント情報":"","ピクチャ表示最大数":"10","実行位置を記憶":"false","タイマー有効化":"false","画像をウィンドウ背後に配置":"false","コマンド接頭辞":""}},
{"name":"SaveInEvent","status":true,"description":"イベント実行中にメニューを開いたりセーブできるようにするプラグインです","parameters":{}},
{"name":"--------------------------","status":true,"description":"---------------------------------------------------------------","parameters":{}},
{"name":"--ピクチャ系--------------","status":true,"description":"---------------------------------------------------------------","parameters":{}},
{"name":"EasingPicture","status":true,"description":"ピクチャーの移動パターンを増やします。","parameters":{}},
{"name":"PictureCallCommon","status":true,"description":"ピクチャのボタン化プラグイン","parameters":{"透明色を考慮":"false","ピクチャ番号の変数番号":"0","ポインタX座標の変数番号":"0","ポインタY座標の変数番号":"0","タッチ操作抑制":"true","タッチ操作抑制スイッチ":"0","戦闘中常にコモン実行":"false","並列処理として実行":"true","無効スイッチ":"0"}},
{"name":"--------------------------","status":true,"description":"---------------------------------------------------------------","parameters":{}},
{"name":"--コモンイベント系---------","status":true,"description":"---------------------------------------------------------------","parameters":{}},
{"name":"NOM_CommonEventWithVariables","status":true,"description":"コモンイベントをプラグインコマンドで呼び出す","parameters":{"Common Event List":"[\"{\\\"PluginCommandName\\\":\\\"CP\\\",\\\"CommonEventID\\\":\\\"23\\\",\\\"VariableID\\\":\\\"61\\\"}\",\"{\\\"PluginCommandName\\\":\\\"BG\\\",\\\"CommonEventID\\\":\\\"28\\\",\\\"VariableID\\\":\\\"83\\\"}\",\"{\\\"PluginCommandName\\\":\\\"MW\\\",\\\"CommonEventID\\\":\\\"33\\\",\\\"VariableID\\\":\\\"97\\\"}\",\"{\\\"PluginCommandName\\\":\\\"CutIn\\\",\\\"CommonEventID\\\":\\\"86\\\",\\\"VariableID\\\":\\\"1\\\"}\",\"{\\\"PluginCommandName\\\":\\\"Still\\\",\\\"CommonEventID\\\":\\\"39\\\",\\\"VariableID\\\":\\\"87\\\"}\"]"}},
{"name":"SimpleMenuLayout","status":true,"description":"シンプルなメニュー画面を実装します。","parameters":{"----基本的な設定----":"","メニュー幅":"240","メニュー列数":"1","メニューX座標":"{\"basis\":\"center\",\"correction\":\"0\"}","メニューY座標":"{\"basis\":\"center\",\"correction\":\"0\"}"}},
{"name":"EventInformation","status":true,"description":"イベントの頭上に文字を表示したい時に使います","parameters":{}},
{"name":"RandomShake","status":true,"description":"イベントコマンド「画面のシェイク」にランダムに揺らす機能を追加します。","parameters":{"SwitchNumber":"13"}},
{"name":"Yami_8DirEx","status":true,"description":"8方向移動(タッチパネル対応版)","parameters":{"dir4 Switch ID":"0"}},
{"name":"Torigoya_TextRuby","status":true,"description":"メッセージにルビ記法を追加します","parameters":{"■ 基本設定":"","Main Text Scale":"0.90","Sub Text Scale":"0.35","Ignore Escape Characters":"false","■ 上級者向け設定":"","Dictionaries":""}},
{"name":"SentenceDataExtractor","status":true,"description":"ゲーム起動時にゲーム中の全メッセージをテキストファイルに書き出す","parameters":{}}
];
