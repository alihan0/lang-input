(function($) {
    $.fn.langInput = function(options) {
      var langs = options.langs;
      var placeholder = options.placeholder ||  "";
      var placeholderLangPrefix = options.placeholderLangPrefix;
      var inputname = options.name || $(this).attr('id');
      var inputType = options.input || "text";
      var textareaRows = options.textareaRows || 0;
      var textareaCols = options.textareaCols || 0;
      
      return this.each(function() {
        var $container = $(this);
        $container.empty();
        var $tabList = $('<ul class="nav nav-tabs" role="tablist"></ul>');
        var $tabContent = $('<div class="tab-content"></div>');
        $.each(langs, function(i, lang) {
          var $tabLink = $('<a class="nav-link text-dark fw-bold" data-bs-toggle="tab" href="#tab-' + inputname + '-' + i + '" role="tab">' + lang + '</a>');
          var $tabPane = $('<div class="tab-pane" id="tab-' + inputname + '-' + i + '" role="tabpanel"></div>');
          $tabList.append($('<li class="nav-item"></li>').append($tabLink));
          $tabContent.append($tabPane);
  
          if (i === 0) {
            $tabLink.addClass('active');
            $tabPane.addClass('active');
          }
        });
        $container.append($tabList).append($tabContent);
  
        // tablere içerik ekleme
        $.each(langs, function(i, lang) {
          var $tabPane = $('#tab-' + inputname + '-' + i);
          var $content = $container.find('.content-'+ inputname + '-' + lang);
          if ($content.length) {
            $tabPane.append($content.html());
          } else {
            var $containterID = $container.attr('id');
            var placeholderText = placeholderLangPrefix ? lang.toUpperCase() + ' ' + placeholder : placeholder;
            var input;

            if(inputType == "text"){
              if(placeholderLangPrefix === true){
                input = '<div class="input-group mb-3"><span class="input-group-text">'+lang.toUpperCase()+'</span><input type="text" class="form-control" name='+inputname+'_' + lang + ' id="'+inputname+'_' + lang + '" placeholder="'+placeholder+'"></div>'
              }else{
                  input = '<input class="form-control type="text" name="' + inputname + '_' + lang + '" id="' + inputname + '_' + lang + '" placeholder="' + placeholderText + '"/>';
              }

            }else if(inputType == "textarea"){
              if(placeholderLangPrefix === true){
                input = '<div class="input-group mb-3"><span class="input-group-text">'+lang.toUpperCase()+'</span><textarea placeholder="'+placeholderText+'" class="form-control" cols="'+textareaCols+'" rows="'+textareaRows+'" id="'+inputname+'_' +lang+'" name="'+inputname+'_'+lang+'"></textarea></div>'
              }else{
                  input = '<textarea placeholder="'+placeholderText+'" class="form-control" cols="'+textareaCols+'" rows="'+textareaRows+'" id="'+inputname+'_'+lang+'" name="'+inputname+'_'+lang+'"></textarea>';
              }
            }

          
            


            $tabPane.html(input);
          }
        });
      });
    };
  })(jQuery);
  
