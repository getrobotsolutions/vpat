
    function myKeyPress(e){
        var keynum;

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
                document.body.style.backgroundImage = "url('assets/3.png')";
                PlaySpeech("Safety is our number one priority.  We constantly look for all types of hazards! (large projection screen and robot torso screen flashes image of The Dukes of Hazzard.");
                break;
            case '4':
                document.body.style.backgroundImage = "url('assets/3.png')";
                PlaySpeech("Funny you should ask…I have a program for that.  Here are the top ideas I generated for WestRock.");
                break;
            case '5':
                document.body.style.backgroundImage = "url('assets/5.png')";
                PlaySpeech("Knitted Beard Hat.");
                break;
            case '6':
                document.body.style.backgroundImage = "url('assets/6.png')";
                PlaySpeech("Quack: A Duck-Billed Protective Muzzle For Dogs.");
                break;
            case '7':
                document.body.style.backgroundImage = "url('assets/7.png')";
                PlaySpeech("Baby Mop.");
                break;
            case '8':
                document.body.style.backgroundImage = "url('assets/7.png')";
                PlaySpeech("I’m So glad you asked, John.  Productivity is my passion.  Robots perform much better than humans in nearly every respect, as you have seen.");
                break;
            default:
                alert("Try Again: " + String.fromCharCode(keynum));
                break;

        }

    }
