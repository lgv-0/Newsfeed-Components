/* This is the data we will be using to create our article components */
/* Look over this data, then proceed to line 91*/
const data = [
  {
    title: 'Lambda School Students: "We\'re the best!"',
    date: 'Nov 5th, 2018',
    firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
  },
  {
    title: 'Javascript and You, ES6',
    date: 'May 7th, 2019',
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot 
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
  },
  {
    title: 'React vs Angular vs Vue',
    date: 'June 7th, 2019',
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
  },
  {
    title: 'Professional Software Development in 2019',
    date: 'Jan 1st, 2019',
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  },
  //New articles
  {
    title:"Logan's Legit Article 1",
    date: "Jan 15th, 2020",
    firstParagraph: `The common housefly, Musca domestica, lives in close association with people allover the world (Fig. 6.1).
          The insects feed on human foodstuffs and wastes wherethey can pick up and transport various disease agents.
          In addition to the housefly,a number of other fly species have adapted to life in human settlements,
          where theypresent similar problems. In warmer climates, the filth fly, M. sorbens is of particu-lar  interest  in  this  regard. 
          It  is  closely  related  to  the  housefly  and  consideredimportant in the spread of eye infections. 
          Blowflies (Calliphoridae) and other flieshave been associated with the transmission of enteric infections`,
    secondParagraph: `Eggs  are  usually  laid  in  masses  on  organic  material  such  as  manure  andgarbage. 
          Hatching occurs within a few hours. The young larvae burrow into thebreeding material; 
          they must obtain oxygen from the atmosphere and can, there-fore,  survive  only  where  sufficient  fresh  air  is  available.  
          When  the  breeding  me-dium is very wet they can live on its surface only, whereas in drier materials theymay penetrate to a depth of several 
          centimetres.`,
    thirdParagraph: `Flies can spread diseases because they feed freely on human food and filthy matteralike. 
          The  fly  picks  up  disease-causing  organisms  while  crawling  and  feeding. 
          Those that stick to the outside surfaces of the fly may survive for only a few hours, but those that are ingested with the food may 
          survive in the fly’s crop or gut forseveral days. Transmission takes place when the fly makes contact with people ortheir  food  (Fig.  6.5). 
          Most  of  the  diseases  can  also  be  contracted  more  directlythrough contaminated food, water, air, hands and person-to-person contact. 
          Thisreduces the relative importance of flies as carriers of disease.`
  },
  {
    title:"1 elcitrA tigeL s'nagoL",
    date: "Jan 15th, 2020",
    firstParagraph: `.)1.6 .giF( dlrow eht revolla elpoep htiw noitaicossa esolc ni sevil ,acitsemod acsuM ,ylfesuoh nommoc ehT
      .stnega esaesid suoirav tropsnart dna pu kcip nac yehterehw setsaw dna sffutsdoof namuh no deef stcesni ehT 
      ,stnemelttes namuh ni efil ot detpada evah seiceps ylf rehto fo rebmun a,ylfesuoh eht ot noitidda nI 
      .drager  siht  ni  tseretni  ral-ucitrap fo si snebros .M ,ylf htlif eht ,setamilc remraw nI .smelborp ralimis tneserpyeht erehw 
      .snoitcefni eye fo daerps eht ni tnatropmideredisnoc  dna  ylfesuoh  eht  ot  detaler  ylesolc  si  tI 
      snoitcefni ciretne fo noissimsnart eht htiw detaicossa neeb evahseilf rehto dna )eadirohpillaC( seilfwolB`,
    secondParagraph: `.egabragdna  erunam  sa  hcus  lairetam  cinagro  no  sessam  ni  dial  yllausu  era  sggE
          ;lairetam gnideerbeht otni worrub eavral gnuoy ehT .sruoh wef a nihtiw srucco gnihctaH 
          .elbaliava  si  ria  hserf  tneiciffus  erehw  ylno  evivrus  ,erof-ereht ,nac dna erehpsomta eht morf negyxo niatbo tsum yeht 
          lareves fo htped a ot etartenep yamyeht slairetam reird ni saerehw ,ylno ecafrus sti no evil nac yeht tew yrev si muid-em  gnideerb  eht  nehW 
          .sertemitnec`,
    thirdParagraph: `.ekilarettam yhtlif dna doof namuh no yleerf deef yeht esuaceb sesaesid daerps nac seilF
          .gnideef  dna  gnilwarc  elihw  smsinagro  gnisuac-esaesid  pu  skcip  ylf  ehT 
          yam doof eht htiw detsegni era taht esoht tub ,sruoh wef a ylno rof evivrus yam ylf eht fo secafrus edistuo eht ot kcits taht esohT 
          .)5.6  .giF(  doof  riehtro elpoep htiw tcatnoc sekam ylf eht nehw ecalp sekat noissimsnarT .syad larevesrof tug ro porc s’ylf eht ni evivrus 
          .tcatnoc nosrep-ot-nosrep dna sdnah ,ria ,retaw ,doof detanimatnoc hguorhtyltcerid  erom  detcartnoc  eb  osla  nac  sesaesid  eht  fo  tsoM 
          .esaesid fo sreirrac sa seilf fo ecnatropmi evitaler eht secudersihT`
  }
];

/* Step 1: Create a function that creates a component. You will want your component to look like the template below: 
  
  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class='expandButton'></span>
  </div>

  Hint: You will need to use createElement more than once here!

  Your function should take either an object as it's one argument, or 5 separate arguments mapping to each piece of the data object above.

  Step 2: Add an event listener to the expandButton span. This event listener should toggle the class 'article-open' on the 'article' div.

  Step 3: return the entire component.

  Step 4: Map over the data, creating a component for each oject and add each component to the DOM as children of the 'articles' div.

  Step 5: Add a new article to the array. Make sure it is in the same format as the others. Refresh the page to see the new article.

*/

function ExpandCallback(eventSender)
{
  if (eventSender.target.parentElement.attributes["class"].value.indexOf("-open") == -1)
  {
    eventSender.target.parentElement.attributes["class"].value = "article-open";
    eventSender.target.innerText = "Close";
  }
  else
  {
    eventSender.target.parentElement.attributes["class"].value = "article";
    eventSender.target.innerText = "Read More";
  }
}

function CreateArticleContainment(o_Data)
{
  let Div = document.createElement("div");
  
  Div.setAttribute("class", "article");

  Div.appendChild(Object.assign(document.createElement("h2"), {"innerText":o_Data["title"]}));

  Div.appendChild(Object.assign(document.createElement("p"), {"innerText":o_Data["date"]}));
  Div.children[Div.children.length - 1].setAttribute("class", "date");

  Div.appendChild(Object.assign(document.createElement("p"), {"innerText":o_Data["firstParagraph"]}));
  Div.appendChild(Object.assign(document.createElement("p"), {"innerText":o_Data["secondParagraph"]}));
  Div.appendChild(Object.assign(document.createElement("p"), {"innerText":o_Data["thirdParagraph"]}));

  Div.appendChild(Object.assign(document.createElement("span"), {"innerText":"Read More"}));
  Div.children[Div.children.length - 1].setAttribute("class", "expandButton");
  Div.children[Div.children.length - 1].addEventListener("mousedown", ExpandCallback);

  return Div;
}

for (let i = 0; i < data.length; i++)
  document.getElementsByClassName("articles")[0].appendChild(CreateArticleContainment(data[i]));