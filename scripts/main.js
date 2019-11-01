var test;
    function myKeyPress(e){
        var keynum;
        clearInterval(test);

        if(window.event) { // IE
            keynum = e.keyCode;
        } else if(e.which){ // Netscape/Firefox/Opera
            keynum = e.which;
        }

        //alert(String.fromCharCode(keynum));
        switch (String.fromCharCode(keynum)) {

            case '1':
                document.body.style.backgroundImage = "url('assets/suit.png')";
                PlaySpeech("Thanks, John! I’m happy to be here.");
                break;
            case '2':
                document.body.style.backgroundImage = "url('assets/suit.png')";
                PlaySpeech("I can dance.");
                break;
            case '3':
                document.body.style.backgroundImage = "url('assets/suit.png')";
                PlaySpeech("Safety is our number one priority.  We constantly look for all types of hazards!");
                break;
            case '4':
                document.body.style.backgroundImage = "url('assets/3.png')";
                break;
            case '5':
                document.body.style.backgroundImage = "url('assets/3.png')";
                PlaySpeech("Funny you should ask…I have a program for that.  Here are the top ideas I generated for WestRock.");
                break;
            case '6':
                document.body.style.backgroundImage = "url('assets/5.png')";
                PlaySpeech("Knitted Beard Hat.");
                break;
            case '7':
                document.body.style.backgroundImage = "url('assets/6.png')";
                PlaySpeech("Quack: A Duck-Billed Protective Muzzle For Dogs.");
                break;
            case '8':
                document.body.style.backgroundImage = "url('assets/7.png')";
                PlaySpeech("Baby Mop.");
                break;
            case '9':
                PlaySpeech("I’m So glad you asked, John.  Productivity is my passion.  Robots perform much better than humans in nearly every respect, as you have seen.");
                break;
            case '0':
                GetCaptureImage();
                GetCaptureImageBase64();
                MakeRobotFace();
                //SetRobotFace();
                var i=0;
                test = setInterval(function () {
                    if(i===0)
                    {
                        document.body.style.backgroundImage = "url('assets/error.png')";
                        i=1;
                    }
                    else
                    {
                        i=0;
                        document.body.style.backgroundImage = "url('assets/error1.png')";
                    }
                }, 200);


                break;
            default:
                alert("Script is in between 1 to 9, you pressed:  " + String.fromCharCode(keynum));
                break;

        }

    }
