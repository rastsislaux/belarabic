window.onload = init;

function init() {
	var button = document.getElementById("kirtoar");
	button.onclick = handleButtonClick;
	var button2 = document.getElementById("artokir");
	button2.onclick = handleButton2Click;
}

function handleButtonClick() {
	var txt = document.getElementById("text-original").value;
	let k = "";
	// не забыть добавить смягченные символы и ДЖ ДЗ
	for(let i = 0; i < txt.length; i++)
	{
		if ((txt[i] == 'А') || (txt[i] == 'а')) {
			k += "ا‎";
		}
		else if ( ((txt[i] == 'Д') || (txt[i] == 'д')) && ((txt[i+1] == 'З') || (txt[i+1] == 'з')) && ( ((txt[i+2] == 'Ь') || (txt[i+2] == 'ь')) || ((txt[i+2] == 'Е') || (txt[i+2] == 'е')) || ((txt[i+2] == 'Ё') || (txt[i+2] == 'ё')) || ((txt[i+2] == 'Ю') || (txt[i+2] == 'ю')) || ((txt[i+2] == 'Я') || (txt[i+2] == 'я')) || ((txt[i+2] == 'І') || (txt[i+2] == 'і')) )) {
			k += "ࢮ‎‎‎‎"; i++;
		}
		else if ( ((txt[i] == 'Д') || (txt[i] == 'д')) && ((txt[i+1] == 'З') || (txt[i+1] == 'з'))) {
			k += "ࢮ‎‎"; i++;
		}
		else if ( ((txt[i] == 'Д') || (txt[i] == 'д')) && ((txt[i+1] == 'Ж') || (txt[i+1] == 'ж'))) {
			k += "ج‎‎"; i++;
		}
		else if ( ((txt[i] == 'Ц') || (txt[i] == 'ц')) && ( ((txt[i+1] == 'Ь') || (txt[i+1] == 'ь')) || ((txt[i+1] == 'Е') || (txt[i+1] == 'е')) || ((txt[i+1] == 'Ё') || (txt[i+1] == 'ё')) || ((txt[i+1] == 'Ю') || (txt[i+1] == 'ю')) || ((txt[i+1] == 'Я') || (txt[i+1] == 'я')) || ((txt[i+1] == 'І') || (txt[i+1] == 'і')) )) {
			k += "س‎‎‎"; i++;
		}
		else if ( ((txt[i] == 'Л') || (txt[i] == 'л')) && ( ((txt[i+1] == 'Ь') || (txt[i+1] == 'ь')) || ((txt[i+1] == 'Е') || (txt[i+1] == 'е')) || ((txt[i+1] == 'Ё') || (txt[i+1] == 'ё')) || ((txt[i+1] == 'Ю') || (txt[i+1] == 'ю')) || ((txt[i+1] == 'Я') || (txt[i+1] == 'я')) || ((txt[i+1] == 'І') || (txt[i+1] == 'і')) )) {
			k += "ل‎‎‎‎"; i++;
		}
		else if ( ((txt[i] == 'Н') || (txt[i] == 'н')) && ( ((txt[i+1] == 'Ь') || (txt[i+1] == 'ь')) || ((txt[i+1] == 'Е') || (txt[i+1] == 'е')) || ((txt[i+1] == 'Ё') || (txt[i+1] == 'ё')) || ((txt[i+1] == 'Ю') || (txt[i+1] == 'ю')) || ((txt[i+1] == 'Я') || (txt[i+1] == 'я')) || ((txt[i+1] == 'І') || (txt[i+1] == 'і')) )) {
			k += "ن‎‎‎‎‎"; i++;
		}
		else if ( ((txt[i] == 'С') || (txt[i] == 'с')) && ( ((txt[i+1] == 'Ь') || (txt[i+1] == 'ь')) || ((txt[i+1] == 'Е') || (txt[i+1] == 'е')) || ((txt[i+1] == 'Ё') || (txt[i+1] == 'ё')) || ((txt[i+1] == 'Ю') || (txt[i+1] == 'ю')) || ((txt[i+1] == 'Я') || (txt[i+1] == 'я')) || ((txt[i+1] == 'І') || (txt[i+1] == 'і')) )) {
			k += "ث‎‎‎‎‎‎"; i++;
		}
		else if ( ((txt[i] == 'З') || (txt[i] == 'з')) && ( ((txt[i+1] == 'Ь') || (txt[i+1] == 'ь')) || ((txt[i+1] == 'Е') || (txt[i+1] == 'е')) || ((txt[i+1] == 'Ё') || (txt[i+1] == 'ё')) || ((txt[i+1] == 'Ю') || (txt[i+1] == 'ю')) || ((txt[i+1] == 'Я') || (txt[i+1] == 'я')) || ((txt[i+1] == 'І') || (txt[i+1] == 'і')) )) {
			k += "ض‎‎‎‎‎‎‎"; i++;
		}
		else if ( ((txt[i] == 'Т') || (txt[i] == 'т')) && ( ((txt[i+1] == 'Ь') || (txt[i+1] == 'ь')) || ((txt[i+1] == 'Е') || (txt[i+1] == 'е')) || ((txt[i+1] == 'Ё') || (txt[i+1] == 'ё')) || ((txt[i+1] == 'Ю') || (txt[i+1] == 'ю')) || ((txt[i+1] == 'Я') || (txt[i+1] == 'я')) || ((txt[i+1] == 'І') || (txt[i+1] == 'і')) )) {
			k += "ت‎‎‎‎‎‎‎‎"; i++;
		}
		else if ( ((txt[i] == 'К') || (txt[i] == 'к')) && ( ((txt[i+1] == 'Ь') || (txt[i+1] == 'ь')) || ((txt[i+1] == 'Е') || (txt[i+1] == 'е')) || ((txt[i+1] == 'Ё') || (txt[i+1] == 'ё')) || ((txt[i+1] == 'Ю') || (txt[i+1] == 'ю')) || ((txt[i+1] == 'Я') || (txt[i+1] == 'я')) || ((txt[i+1] == 'І') || (txt[i+1] == 'і')) )) {
			k += "ك‎‎‎‎‎‎‎‎‎"; i++;
		}
		else if ((txt[i] == 'Б') || (txt[i] == 'б')) {
			k += "ب‎";
		}
		else if ((txt[i] == 'Ц') || (txt[i] == 'ц')) {
			k += "ࢯ‎";
		}
		else if ((txt[i] == 'Ч') || (txt[i] == 'ч')) {
			k += "چ‎";
		}
		else if ((txt[i] == 'Х') || (txt[i] == 'х')) {
			k += "خ‎";
		}
		else if ((txt[i] == 'Д') || (txt[i] == 'д')) {
			k += "د‎";
		}
		else if ((txt[i] == 'Ф') || (txt[i] == 'ф')) {
			k += "ف‎";
		}
		else if ((txt[i] == 'Г') || (txt[i] == 'г')) {
			k += "ه‎";
		}
		else if ((txt[i] == 'Й') || (txt[i] == 'й')) {
			k += "ى‎";
		}
		else if ((txt[i] == 'К') || (txt[i] == 'к')) {
			k += "ق‎";
		}
		else if ((txt[i] == 'Л') || (txt[i] == 'л')) {
			k += "ل‎";
		}
		else if ((txt[i] == 'М') || (txt[i] == 'м')) {
			k += "م‎";
		}
		else if ((txt[i] == 'Н') || (txt[i] == 'н')) {
			k += "ن‎";
		}
		else if ((txt[i] == 'П') || (txt[i] == 'п')) {
			k += "پ‎";
		}
		else if ((txt[i] == 'Р') || (txt[i] == 'р')) {
			k += "ر‎";
		}
		else if ((txt[i] == 'С') || (txt[i] == 'с')) {
			k += "ص‎";
		}
		else if ((txt[i] == 'Ш') || (txt[i] == 'ш')) {
			k += "ش‎‎";
		}
		else if ((txt[i] == 'Т') || (txt[i] == 'т')) {
			k += "ط‎‎";
		}
		else if ((txt[i] == 'Ў') || (txt[i] == 'ў')) {
			k += "و‎‎";
		}
		else if ((txt[i] == 'В') || (txt[i] == 'в')) {
			k += "و‎‎";
		}
		else if ((txt[i] == 'З') || (txt[i] == 'з')) {
			k += "ض‎‎‎";
		}
		else if ((txt[i] == 'Ж') || (txt[i] == 'ж')) {
			k += "ژ‎‎‎";
		}
		else if ((txt[i] == ' ') && (document.getElementById("keepSpaces").checked == true)) {
			k += " ‎";
		}
		else if (txt[i] == '\'') {
			k += "ع‎";
		}
	}
	document.getElementById("text-final").value = "‮"+k; // не удалять пустые кавычки, там служебный символ
}

function handleButton2Click() {
	var txt = document.getElementById("text-original").value;
	let k = "";
	console.log(txt);
	txt[0] = '';
	// не забыть добавить смягченные символы и ДЖ ДЗ
	for(let i = 0; i < txt.length; i++) {
		if (txt[i] == 'ب') {
			k += "б";
		}
		else if (txt[i] == 'ا') {
			k += "а";
		}
		else if (txt[i] == 'ࢯ') {
			k += "ц";
		}
		else if (txt[i] == 'چ') {
			k += "ч";
		}
		else if (txt[i] == 'خ') {
			k += "х";
		}
		else if (txt[i] == 'د') {
			k += "д";
		}
		else if (txt[i] == 'ج') {
			k += "дж";
		}
		else if (txt[i] == 'ف') {
			k += "ф";
		}
		else if (txt[i] == 'ه') {
			k += "г";
		}
		else if (txt[i] == 'ى') {
			k += "й";
		}
		else if (txt[i] == 'ق') {
			k += "к";
		}
		else if (txt[i] == 'ل') {
			k += "л";
		}
		else if (txt[i] == 'م') {
			k += "м";
		}
		else if (txt[i] == 'ن') {
			k += "н";
		}
		else if (txt[i] == 'پ') {
			k += "п";
		}
		else if (txt[i] == 'ر') {
			k += "р";
		}
		else if (txt[i] == 'ص') {
			k += "с";
		}
		else if (txt[i] == 'ش') {
			k += "ш";
		}
		else if (txt[i] == 'ط') {
			k += "т";
		}
		else if (txt[i] == 'و') {
			k += "в";
		}
		else if (txt[i] == 'ض') {
			k += "з";
		}
		else if (txt[i] == 'ژ') {
			k += "ж";
		}
		else if (txt[i] == 'س') {
			k += "ць";
		}
		else if (txt[i] == 'ࢮ') {
			k += "дз";
		}
		else if (txt[i] == 'ل') {
			k += "ль";
		}
		else if (txt[i] == 'ن') {
			k += "нь";
		}
		else if (txt[i] == 'ث') {
			k += "сь";
		}
		else if (txt[i] == 'ز') {
			k += "зь";
		}
		else if (txt[i] == 'ت') {
			k += "ть";
		}
		else if (txt[i] == 'ك') {
			k += "кь";
		}
		else if (txt[i] == 'ع') {
			k += "\'";
		}
		else if ((txt[i] == ' ') && (document.getElementById("keepSpaces").checked == true))  {
			k += " ";
		}
	}
	document.getElementById("text-final").value = k;
}