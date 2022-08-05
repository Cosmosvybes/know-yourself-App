
enter.addEventListener('click', () => {
    var dob = document.getElementById('userInput').value;
    var user = new Date(dob);
    var factBox = document.getElementById('factbox');
    var disLikes = document.getElementById('dislikes');
    var person = 'This person';


    if (user.getTime() >= new Date('01-20') && user.getTime() <= new Date('02-18')) {
        console.log('Aquarius')
        disLikes.innerHTML = " This person do not like drama, in fact  they will stay clear away from it. " + '<br/>' +
            person + " wont judge no matter what, they have less involvement with people who judge others  " + '<br/>' +
            " " + "  When this person dont wants to be bothered, they  usually listen to music as an outlet and will get annoyed if you keep on trying to talk to them." + '<br/>' +
            " fighting upset this person, dont bring it to them  ." + '<br/>' +
            "  . Dont be around this person if you lack compassion" + '<br/>'



        factBox.innerHTML =
            person + " is friendly and affable .  " + '<br/>' +
            person + " desires to be unique and original, and to be respected for it. " + '<br/>' +
            person + "wants to analyze everything and everyone, usually wants to text your limits.  " + '<br/>' +
            " Prefer to create for the sake of advancing rather than profitting !" + '<br/>' +
            person + " is practical while thinking intuitively " + '<br/>' +
            person + " " + "  is generally very easy going, tolerant in nature " + '<br/>' +
            person + " " + "tends to have much common sense even at young age . " + '<br/>' +
            person + " " + " wants everyone to believe his words, and gets angry if that's not the case. " + '<br/>' +
            person + " finds it hard to recover quickly when they are hurt, they just can't snap out of it. " + '<br/>' +
            person + " always have strong believe and fair mind . " + '<br/>' +
            person + " is quite good at pretending at like everything is fine, and can shut down emotionally . " + '<br/>' +
            person + " will do anything it takes to reach their goals " + '<br/>' +
            person + " is headstrong and never backdown " + '<br/>' +
            person + " has a high standard, a big heart and bigger middle finger "
    }

    if (user.getTime() >= new Date('02-19') && user.getTime() <= new Date('03-20')) {
        console.log('Pisces')
        disLikes.innerHTML = " Dont take this person for granted. " + '<br/>' +
            person + " dislikes feeling pushed around  " + '<br/>' +
            " They dont like leaving their comfort zone " + " " + '<br/>' +
            person + "  likes to be touched in the face unexpectedly, cuddles and movie marathon ." + '<br/>' +
            person + " likes to be supported , no matter what ." + '<br/>'



        factBox.innerHTML =
            person + " has one of the purest of hearts, that will hype you up and be your biggest supporter .  " + '<br/>' +
            person + "can be really needy and requires a lot of attention,but also like their space.  " + '<br/>' +
            "This person  wont always approve what people say !" + '<br/>' +
            person + " has extreme compassion and feel the pain of others, if something is wrong in the world that affects them, it affect them quite deeply " + '<br/>' +
            person + " " + " can't be fooled, its better to be straight with this person " + '<br/>' +
            person + " " + " can be quick to cry,  but they can go as ice cold jas as fast as they sense you dont deserve their tears . " + '<br/>' +
            person + " " + " have a sixth sense that could never , ever be explianed , they are able to sense things that others can not. " + '<br/>' +
            person + " usually dont see flaws in people, they will love and understand you even at your worst. " + '<br/>' +
            person + " can cancels plans in the last minute . " + '<br/>' +
            person + "blames themselves too often . " + '<br/>' +
            person + "  likes animals." + '<br/>' +
            person + " either forgets things too easily or can't  get stuff out of their head. " + '<br/>' +
            person + " often acts first and think later. "
    }

    if (user.getTime() >= new Date('03-21') && user.getTime() <= new Date('04-19')) {
        console.log('Aries')
        disLikes.innerHTML = " This person hate being compared to ex. " + '<br/>' +
            person + " dislikes being hindered when he/she's on a misssion  " + '<br/>' +
            " " + " Never lay or think you can control this person, they will just laugh in your face" + '<br/>' +
            person + " hates poeple touching them when they are sad, angry especially when they dont really know you, if you dont want them to yell at you  ." + '<br/>' +
            person + " hates sluggish  and those that waste time when there is more to do ." + '<br/>'



        factBox.innerHTML =
            person + " falls fast and hard in love, but their trust needs to be earned .  " + '<br/>' +
            person + " is never boring, and will give you romantic challenge you crave " + '<br/>' +
            " this person might be emotionally detached sometimes, but they still love you a lot more than you think !" + '<br/>' +
            person + " desire to be first can give them a dependencyon the person they love. " + '<br/>' +
            person + " will cry because you hurt their feelings but because you made them angry enough that they could kill you " + "  " + '<br/>' +
            person + " is spiteful, you hurt them,they will forgive you, but will make sure you feelthe same pain you gave them. " + " . " + '<br/>' +
            person + " " + " never hides thier feelings and prefer to say it in the moment. " + '<br/>' +
            person + " version of being funny is quick . " + '<br/>' +
            person + " knows how to make a statement, and usually stand out from th crowd . " + '<br/>' +
            person + " hates slug. " + '<br/>' +
            person + " dont like to be around negative and overly cautious people " + '<br/>' +
            person + " will never welcome people who beat around the bush " + '<br/>'

    }

    if (user.getTime() >= new Date('04-20') && user.getTime() <= new Date('05-20')) {

        disLikes.innerHTML = " Deosn't give second chance to liars, dont do that. They often forget people people  who have wronged them " + '<br/>' +
            person + " know how to kill with kindness, but dont get it twisted .... they still dont like you. " + '<br/>' +
            " " + " Beware of arguing with this person , because its pointless they still wont move them " + '<br/>' +
            person + " like people who makes them smile, it measn a lot to them  ." + '<br/>' +
            person + " wants to get away fro some time and do things their on way, don't  stop them. ." + '<br/>'



        factBox.innerHTML =
            person + " rarely change their mind.  " + '<br/>' +
            person + " is cautious and doubtful of new and unusual  situations " + '<br/>' +
            "  this person doesn't ,ind hardwork, if it gets them what they want!" + '<br/>' +
            person + " preferred to be self reliant, and tends to be introverted  " + '<br/>' +
            person + " " + " only believes things until he/she sees it " + '<br/>' +
            person + " " + "dont blindly follow trends  . " + '<br/>' +
            person + " " + "doesn't compete for love or attention. " + '<br/>' +
            person + " is a risk-taker, who lives for the moment . " + '<br/>' +
            person + " will say it to your face and not behind you . " + '<br/>' +
            person + " always has a lot to say,but will rather wait for the perfect time, they want their words to stick. " + '<br/>' +
            person + " has a mentality of whatever you do, i will find out " + '<br/>' +
            person + " pays attention to details " + '<br/>' +
            person + " often feellike everyone depends on them, and this boths helps them and hurt them at times  "
    }

    if (user.getTime() >= new Date('05-21') && user.getTime() <= new Date('06-21')) {
        disLikes.innerHTML = " This persoon is quite possesive and can be materialistic. " + '<br/>' +
            person + " is doubtful by nature, know this and know peace " + '<br/>' +
            "  " + " When this person finally explode, they dont care, and have no control what comes out of their mouth " + '<br/>' +
            "  One of the irritating things you can do to this person is to take what he/she says  personally, dont do it ." + '<br/>' +
            person + " will not take crap from anyone, does no harm and can be destructive when provoked ." + '<br/>'



        factBox.innerHTML =
            person + " is real AF, and loyal to default  .  " + '<br/>' +
            person + " is definitely night person, and can still wake up the next morning with  energy to spare. " + '<br/>' +
            "  When this person is angry about one particular thing, it can make them think about all the bad things they are going through, making them very depressed!" + '<br/>' +
            person + " have hard time sitting still " + '<br/>' +
            person + " " + " can change his/her mind in  seconds " + '<br/>' +
            person + " " + " is very smart and can get bored easily . " + '<br/>' +
            person + " " + " with his childlike energy, he/she is forever young" + '<br/>' +
            person + "battles with strong insecurity in their hearts about love in a relationships and constantly wants re-aasurance. " + '<br/>' +
            person + " is more than talkative and flirty person, he/she's very intelligent and tends to be good at many things  . " + '<br/>' +
            person + " has strong sense of justice and fairness and can easily pluck solution from the aether . " + '<br/>' +
            person + " strive for balance . " + '<br/>' +
            person + " is socailly selective . " + '<br/>' +
            person + " is good at speculatiob, but very indecisive. "

    }

    if (user.getTime() >= new Date('06-22') && user.getTime() <= new Date('07-22')) {
        disLikes.innerHTML = "can hold a conversation about anything and everything but themselves, but once you start asking personal questions, they cleverly deflect or really get quiet. " + '<br/>' +
            person + " acts cold around when they either shy or unsure about your energy, show them the good energy " + '<br/>' +
            person + " will never apoligize for what they feel " + " " + '<br/>' +
            person + " is incredibly tough on the inside, dont be misled by their sensitivity, by thinking you can walk all of over them" + '<br/>' +
            "moodiness is something they can't control, you have to understand them for this  ." + '<br/>'



        factBox.innerHTML =
            person + "  loves food, especially anything sweet  .  " + '<br/>' +
            person + " is artistic and fascinated by photographs and colours . " + '<br/>' +
            " Highly imaginative and has tendency to withdaw inwardly, alsp has an excellent memories !" + '<br/>' +
            person + " often use round-about tactics " + '<br/>' +
            person + " can offer you encouragement and ear to listen to really pour out you your mind " + "  " + '<br/>' +
            person + " has loyalty and a family-like friendship " + ". " + '<br/>' +
            person + " " + " is sensitive and sensual , and they can easily relate to everything in life " + '<br/>' +
            person + "love being in a relationships but can be overwhelmed by them  . " + '<br/>' +
            person + " is the type that gives a lot but not expecting a lot in realtionships . " + '<br/>' +
            person + " is not weak and will comeout of shell and attack if need be . " + '<br/>' +
            person + " can have a vey indirect approach in life, if they want something they may even avoid it for some times, and find a suitable route to get it . " + '<br/>' +
            person + " never let go and will read old text messages or chat because it remind them of the good times they had with you. " + '<br/>' +
            person + " likes people's concern for their well being and cherish wise counsel. "
    }
    if (user.getTime() >= new Date('07-23') && user.getTime() <= new Date('08-22')) {
        disLikes.innerHTML = "Dont leave the door open after opening the door to their room. " + '<br/>' +
            person + " doesn't like people who dont take their side or at least understand and respect their side " + '<br/>' +
            " People who gossips about them , make them look bad, or people who laugh at their expense " + " " + '<br/>' +
            person + " will give you the same level of respect you give to them,  ." + '<br/>' +
            person + "This person love to be adored, ensure you adore them,  ." + '<br/>'



        factBox.innerHTML =
            person + " , firstly like to appear very competent .  " + '<br/>' +
            person + " crave for exitement . " + '<br/>' +
            "  Likes having many friends!" + '<br/>' +
            person + " often use his/her charm to get what they want " + '<br/>' +
            person + " " + " is generous with money and affection " + '<br/>' +
            person + " " + " tends to seek constant approval, and never forget small details, especially if they are hurt behind the situation. " + '<br/>' +
            person + " " + "rarely still and likes  physical approval. " + '<br/>' +
            person + " sensitive on the inside, but this is not always portrayed on the outside. " + '<br/>' +
            person + " is shyer than people actually realize . " + '<br/>' +
            person + " likes tradition as it's pretty important to them,and family is especially important. " + '<br/>' +
            person + " is super-protective and always ready to throw down for the people they love. " + '<br/>' +
            person + " tends to make you feel like you are most gorgeous person on earth , if crsuhing on you. " + '<br/>' +
            person + " wants to be remembered in a unique way, leave some kind of legacy. "
    }

    if (user.getTime() >= new Date('08-23') && user.getTime() <= new Date('09-22')) {
        factBox.style.animation = "fadeIn 5s";
        disLikes.style.animation = "fadeIn 5s";

        disLikes.innerHTML = person + " hate people or don't like people who unnecessarily touch their things and move their stuff around." + '<br/>' +
            person + " dont like unreasonable and stubborn poeple and those who play weak and whine." + '<br/>' +
            person + "dont like brash and arrogant poeple, who exhibits carelessness and stupidity." + '<br/>' +
            person + " want a straight forward, honest and direct." + '<br/>' +
            person + " dont welcome people who intrude/invade their privacy, seek their permission, and they will respect you." + '<br/>' +
            person + " may not ask for it, but they want people to show them appreciation." + '<br/>'



        factBox.innerHTML =
            person + " is an over-thinker." + '<br/>' +
            person + " has human lie detector. Probably incurable perfectionist." + '<br/>' +
            person + " is  loyal in relationships ." + '<br/>' +
            person + " is quite sensitive and emotional... even if they dont show it." + '<br/>' +
            person + " has zero tolerance for nonsense." + '<br/>' +
            person + " is trustworthy and can offer you a helping hand." + '<br/>' +
            person + " shows Appreciation through actions rather than words." + '<br/>' +
            person + " Is candid  and always come with useful advice with rational solutions to problems" + '<br/>' +
            person + " love saving money and  may even prefer to make things on their own." + '<br/>' +
            person + " Don't critisize first." + '<br/>' +
            person + " is a greate decision maker." + '<br/>' +
            person + " can make order out of chaos inside and around them." + '<br/>' +
            person + " thoughts are 10X ahead of their acquaintance." + '<br/>' +
            person + " this extremely good at getting any kind of information, his motto is i find shit out. "


    }

    if (user.getTime() >= new Date('09-23') && user.getTime() <= new Date('10-23')) {
        factBox.style.animation = "fadeIn 5s";
        disLikes.style.animation = "fadeIn 5s";
        disLikes.innerHTML = person + " don't like people who rocks the boat too much, learn how to keep things peaceful and harmonious" + '<br/>' +
            person + " widthdraw themself and become silent when they are upset" + '<br/>' +
            " Remind them that you love them, make them fel special , and if in relationship, remind them the reason why you fell for them." + '<br/>' +
            person + " " + "is the type that can share anything with you , if you cool with them" + '<br/>' +
            person + " dislikes injustice, confrontation or conformity." + '<br/>' +
            person + " is a music geek" + '<br/>'



        factBox.innerHTML =
            person + " is the type that knows more than they say." + '<br/>' +
            person + " compliments and re-assures others a lot . " + '<br/>' +
            person + " kinda bad with eye contact when y'all first meet." + '<br/>' +
            person + " acts playful and lighthearted." + '<br/>' +
            person + " wants to be pampered, be generous with your time and show them that you can respect their independence." + '<br/>' +
            person + " wants others to be happy so bad that they forget to make themselves happy." + '<br/>' +
            person + " stuggles with rejecting people, they hardly say NO" + '<br/>' +
            person + "often fear not being liked" + '<br/>' +
            person + " is materialistic i.e they like people who surprises them with gift" + '<br/>' +
            person + " is flirty,spontaneous and generous." + '<br/>' +
            person + "is unreliable, unless they are convinced to a certain level of co-operation" + '<br/>' +
            person + " motto is i fall too fast, forgive too easily and care too much and it really sucks sometimes"

        factBox.style.animation = "fadeIn 5s";
        disLikes.style.animation = "fadeIn 5s";
    }
    if (user.getTime() >= new Date('10-24') && user.getTime() <= new Date('11-21')) {
        factBox.style.animation = "fadeIn 5s";
        disLikes.style.animation = "fadeIn 5s";
        disLikes.innerHTML = "Don't cross this person, their revenge is slow and painful. " + '<br/>' +
            person + " will remember everything you do , that wrong them." + '<br/>' +
            person + "loves transparency " + " " + '<br/>' +
            person + " never let down their guard, because they trust nobody, they dont care how friendly you may seem." + '<br/>'



        factBox.innerHTML =
            person + " is deeply intuitive and tend to over-think their gut feeling." + '<br/>' +
            person + " is sensual, mysterious,sexy,conscious, and are able to make dramatic life changes. " + '<br/>' +
            "Once this person has their mind or heart set on something or someone,they have a strict dediction to it. " + '<br/>' +
            person + " spend a lot of time energy protecting themselves from getting hurt and losing." + '<br/>' +
            person + " is very hard to be decieved." + '<br/>' +
            person + " is dominant in bed, and very primal." + '<br/>' +
            person + " " + "is not afraid to lash her stinger at anyone, bold enough to challenge his/her reckless standpoint. " + '<br/>' +
            person + " " + "is emotionally strong and beautiful " + '<br/>' +
            person + "live by love me totally or dont love me at all rule. " + '<br/>' +
            person + " " + " can kill you with sarcasm. " + '<br/>' +
            person + " " + "professional at reading people's true intentions." + '<br/>' +
            person + " has no tolerance for betrayal."

    }
    if (user.getTime() >= new Date('11-22') && user.getTime() <= new Date('12-21')) {
        factBox.style.animation = "fadeIn 5s";
        disLikes.style.animation = "fadeIn 5s";
        disLikes.innerHTML = "This person dont like overly emotional scene. " + '<br/>' +
            person + " wants you to  be willing and able to back up, what you say , you will do with actions " + '<br/>' +
            person + "although , thry like fun , but will prefer people who push them to be better people " + " " + '<br/>' +
            person + ",  when angry , you can easily see it, but are quite quick to forgive." + '<br/>' +
            person + ",  sometimes get in the mood , where they he/she need space from everyone." + '<br/>'



        factBox.innerHTML =
            person + " is easy going and  enjoy the company of hanging out with good people no matter how different.  " + '<br/>' +
            person + " have strength of character and will stand for what they believe in. " + '<br/>' +
            " This person is an energetic type and can be adventurous!" + '<br/>' +
            person + "is spontaneous and extremely hard to handle. " + '<br/>' +
            person + " " + " wants to prove themselves, have good stories to share.. " + '<br/>' +
            person + " " + "will keep smile on his face even when he/she's hurt. " + '<br/>' +
            person + " " + "can be perfect partner in crime. " + '<br/>' +
            person + "  has the best insult. " + '<br/>' +
            person + " typically hate to be alone,but find themselves alone because people cannot keep up with them. " + '<br/>' +
            person + " have quest for the truth and knowledge, so they are tends to bug you with so much questions. " + '<br/>' +
            person + " absolutley hate showing weakness. " + '<br/>' +
            person + " is headstrong , and never back down " + '<br/>' +
            person + " live by the motto; i dont need you in my life , if you cant understand the the person that i am. And half i dont even know what comes out of my mouth sometimes. "

    }
    if (user.getTime() > (new Date('12-21'))) {
        factBox.style.animation = "fadeIn 5s";
        disLikes.style.animation = "fadeIn 5s";
        disLikes.innerHTML = "This person have a short and i mean short, almost non-existent tolerance for people who refuse to use common sense ." + '<br/>' +
            person + " can go from being funny to being serious in a matter of seconds." + '<br/>' +
            person + "dont want to be taken advantage of , so they tends to show people the domineeering side of them." + " " + '<br/>' +
            "When arguing with this person, dont bring up things that doesnt relate to the arguments, they can pour all their fury on you." + '<br/>' +
            person + " 's heart is sincere and genuine, but their mind keeps them from trusting fully, thats why it's important to show them you're as sincere ." + '<br/>'



        factBox.innerHTML =
            person + " dont want others to know what they are up to, so h/she keeps a low profile .  " + '<br/>' +
            person + " know when to act out and when to be classy. " + '<br/>' +
            "When the person is hurt , everything that used to be important to them, wont be anymore. " + '<br/>' +
            person + " appreciate all the things a simple hug or kiss can express.... without not one word being said " + '<br/>' +
            person + " is great at making connections and instinctively knows who is beneficial to them " + " . " + '<br/>' +
            person + " " + " feeds off body language, a lot. it tells them more than words ever could." + '<br/>' +
            person + " " + " sets her standard high and wont waiver with what she want., may be hard to please" + '<br/>' +
            person + "  will walk away & leave the scene after getting the last word, leaving the person stupified; eventually will will want to make amends if they care. " + '<br/>' +
            person + "at the end of the day , dont want to feel like time was wasted on irrelevant things, they want growth, in all areas of life and to succeed in what they do ." + '<br/>' +
            person + " is more observers than participators in arguments at the start till they really get  fed up. " + '<br/>' +
            person + " rarely shout, but when they do their voice is hurt loudly ." + '<br/>' +
            person + " is very protectives of their friends ." + '<br/>' +
            person + " dresses according to convention, and are close to family, even distant relatives . "


    } else if (user.getTime() < (new Date('01-20'))) {
        factBox.style.animation = "fadeIn 5s";
        disLikes.style.animation = "fadeIn 5s";
        disLikes.innerHTML = "This person have a short and i mean short, almost non-existent tolerance for people who refuse to use common sense ." + '<br/>' +
            person + " can go from being funny to being serious in a matter of seconds." + '<br/>' +
            person + " " + "dont want to be taken advantage of , so they tends to show people the domineeering side of them." + " " + '<br/>' +
            "When arguing with this person, dont bring up things that doesnt relate to the arguments, they can pour all their fury on you." + '<br/>' +
            person + " 's heart is sincere and genuine, but their mind keeps them from trusting fully, thats why it's important to show them you're as sincere ." + '<br/>'



        factBox.innerHTML =
            person + " dont want others to know what they are up to, so he/she keeps a low profile .  " + '<br/>' +
            person + " know when to act out and when to be classy. " + '<br/>' +
            "When this person is hurt , everything that used to be important to them, wont be anymore. " + '<br/>' +
            person + " appreciate all the things a simple hug or kiss can express.... without not one word being said " + '<br/>' +
            person + " is great at making connections and instinctively knows who is beneficial to them " + " . " + '<br/>' +
            person + " " + " feeds off body language, a lot. it tells them more than words ever could." + '<br/>' +
            person + " " + " sets his/her standard high and wont waiver with what he/she want., may be hard to please" + '<br/>' +
            person + "  will walk away & leave the scene after getting the last word, leaving the person stupified; eventually will want to make amends if they care. " + '<br/>' +
            person + " " + "at the end of the day , dont want to feel like time was wasted on irrelevant things, they want growth, in all areas of life and to succeed in what they do ." + '<br/>' +
            person + " is more observers than participators in arguments at the start till they really get  fed up. " + '<br/>' +
            person + " rarely shout, but when they do their voice is hurt loudly ." + '<br/>' +
            person + " is very protective of their friends ." + '<br/>' +
            person + " dresses according to convention, and are close to family, even distant relatives . "


    }

    else {
        return null;
    }


});
