var modulWindows = 
                {
                    loginWindow:  function ()
                                  {
                                      $('.back-graund-windows').fadeIn(300);
                                      $('#modul').removeClass("fadeOutRight").addClass("fadeInRight").show();
                                  },
                    closeWindows: function ()
                                  {
                                      $('.back-graund-windows').fadeOut(300);
                                      $('#modul').removeClass("fadeInRight").addClass("fadeOutRight");
                                  }    
                };
var AjaxRequests =
                    {
                        registration: function ()
                                      {

                                      },
                        login:        function ()
                                      {

                                      }
                    };