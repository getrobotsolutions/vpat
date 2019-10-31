
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
                PlaySpeech("Thanks, John! I’m happy to be here.");
                document.body.style.backgroundImage = "url('../assets/suit.png')";
                break;
            case '2':
                PlaySpeech("I can dance.");
                document.body.style.backgroundImage = "url('../assets/suit.png')";
                break;
            case '3':
                PlaySpeech("Safety is our number one priority.  We constantly look for all types of hazards! (large projection screen and robot torso screen flashes image of The Dukes of Hazzard.");
                document.body.style.backgroundImage = "url('../assets/3.png')";
                break;
            case '4':
                PlaySpeech("Funny you should ask…I have a program for that.  Here are the top ideas I generated for WestRock.");
                document.body.style.backgroundImage = "url('../assets/3.png')";
                break;
            case '5':
                PlaySpeech("Knitted Beard Hat.");
                document.body.style.backgroundImage = "url('../assets/5.png')";
                break;
            case '6':
                PlaySpeech("Quack: A Duck-Billed Protective Muzzle For Dogs.");
                document.body.style.backgroundImage = "url('../assets/6.png')";
                break;
            case '7':
                PlaySpeech("Baby Mop.");
                document.body.style.backgroundImage = "url('../assets/7.png')";
                break;
            case '8':
                PlaySpeech("I’m So glad you asked, John.  Productivity is my passion.  Robots perform much better than humans in nearly every respect, as you have seen.");
                document.body.style.backgroundImage = "url('../assets/7.png')";
                break;
            default:
                alert("Try Again: " + String.fromCharCode(keynum));
                break;

        }

    }
