function get_name_browser(){
  // получаем данные userAgent
  var ua = navigator.userAgent;    
  // с помощью регулярок проверяем наличие текста,
  // соответствующие тому или иному браузеру
  if (ua.search(/Chrome/) > 1) return 'Google Chrome';
  if (ua.search(/Firefox/) > 1) return 'Firefox';
  if (ua.search(/Opera/) > 1) return 'Opera';
  if (ua.search(/Safari/) > 1) return 'Safari';
  if (ua.search(/MSIE/) > 1) return 'Internet Explorer';
  if (ua.search("Trident") > 1) return 'Internet Explorer';
  // условий может быть и больше.
  // сейчас сделаны проверки только 
  // для популярных браузеров
  return 'Не определен';
  
}

// пример использования
var browser = get_name_browser();
if (browser === 'Internet Explorer') 
  alert("IE не поддерживается. Используете более новый браузер!");

