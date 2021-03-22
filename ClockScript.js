/* функция добавления ведущих нулей */
    /* (если число меньше десяти, перед числом добавляем ноль) */
    function zero_first_format(value)
    {
        if (value < 10)
        {
            value='0'+value;
        }
        return value;
    }

    /* функция получения текущей даты и времени */
    function date_time()
    {
        var current_datetime = new Date();
        var day = zero_first_format(current_datetime.getDate());
        var month = zero_first_format(current_datetime.getMonth()+1);
        var year = current_datetime.getFullYear();
        var f = current_datetime.getDay();
        var hours = zero_first_format(current_datetime.getHours());
        var minutes = zero_first_format(current_datetime.getMinutes());
        var seconds = zero_first_format(current_datetime.getSeconds());

        var fd = " ";
        switch(f)
        {
            case 1:
                fd = "Понедельник";
                break;
            case 2:
                fd = "Вторник";
                break;
            case 3:
                fd = "Среда";
                break;
             case 4:
                fd = "Четверг";
                break;    
            case 5:
                fd = "Пятница";
                break;
            case 6:
                fd = "Суббота";
                break;
            case 7:
                fd = "Воскресенье";
                break;
            defualt:
                fd = "undifiend";
        }
        return fd + ". " + day+"."+month+"."+year+" "+hours+":"+minutes+":"+seconds;
    }

    /* выводим текущую дату и время на сайт в блок с id "current_date_time_block" */
    document.getElementById('current_date_time_block').innerHTML = date_time();
    
   
  /* каждую секунду получаем текущую дату и время */
  /* и вставляем значение в блок с id "current_date_time_block" */
  setInterval(function () {
    document.getElementById('current_date_time_block').innerHTML = date_time();
    }, 1000);