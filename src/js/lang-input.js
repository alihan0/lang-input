(function($) {
    $.fn.langInput = function(options) {
      var langs = options.langs;
      var placeholder = options.placeholder ||  "";
      var placeholderLangPrefix = options.placeholderLangPrefix;
      var inputname = options.name || $(this).attr('id');
      
      return this.each(function() {
        var $container = $(this);
        $container.empty();
        var $tabList = $('<ul class="nav nav-tabs" role="tablist"></ul>');
        var $tabContent = $('<div class="tab-content"></div>');
        $.each(langs, function(i, lang) {
          var $tabLink = $('<a class="nav-link text-dark fw-bold" data-bs-toggle="tab" href="#tab-' + i + '" role="tab">' + lang + '</a>');
          var $tabPane = $('<div class="tab-pane" id="tab-' + i + '" role="tabpanel"></div>');
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
          var $tabPane = $('#tab-' + i);
          var $content = $container.find('.content-' + lang);
          if ($content.length) {
            $tabPane.append($content.html());
          } else {
            var $containterID = $container.attr('id');
            var placeholderText = placeholderLangPrefix ? lang.toUpperCase() + ' ' + placeholder : placeholder;
            var input;

            if(placeholderLangPrefix === true){
                input = '<div class="input-group mb-3"><span class="input-group-text">'+lang.toUpperCase()+'</span><input type="text" class="form-control" name='+inputname+'-' + lang + ' id="'+inputname+'-' + lang + '" placeholder="'+placeholder+'"></div>'
            }else{
                input = '<input class="form-control type="text" name="' + inputname + '-' + lang + '" id="' + inputname + '-' + lang + '" placeholder="' + placeholderText + '"/>';
            }

            


            $tabPane.html(input);
          }
        });
      });
    };
  })(jQuery);
  