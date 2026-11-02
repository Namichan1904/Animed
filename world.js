/* WORLD FILE: things that belong to the whole game, not one region.
   1) the prologue every new Descender sees once
   2) the list of sealed regions shown on the realm screen (names are working drafts)
   Region files (neurology.js, ...) are loaded after this file and add themselves with Animed.addRegion(). */
window.Animed=window.Animed||{regions:[]};
Animed.addRegion=function(r){ Animed.regions.push(r); };

/* who: narrator | you | pulse | hush | any character key defined in a region's "characters".
   {you} is replaced by the Descender's name. m (Pulse only): idle | happy | oops */
Animed.prologue=[
 {who:'narrator',t:'In your own world you are no one special. A late night, a cold cup of tea, and a sound you could not place. A bell, very far away.'},
 {who:'narrator',t:'Then you open your eyes, and the body is not yours. The coat is heavy. A torn scarf trails behind you in a wind that has no source. Violet fire gutters around your open hand, and does not burn.'},
 {who:'narrator',t:'Far below, the stars wheel. You are falling the way a Descender falls: from one galaxy to the next, a single spark between worlds. Then the falling stops.'},
 {who:'pulse',m:'happy',t:'A Descender! A real one! I thought the stories were only stories. I am Pulse, a lamplighter spirit. Small, I know. The light makes up for it.'},
 {who:'you',t:'Descender? There has been a mistake. This is not my body.'},
 {who:'pulse',m:'oops',t:'Descenders fall from the stars, one in an age, to answer a call they cannot hear. You fell. But you hold yourself like someone who woke up in a stranger\'s coat.'},
 {who:'you',t:'Where am I?'},
 {who:'pulse',m:'idle',t:'Lumara, the realm between waking and sleeping. Everything that moves, remembers or feels here travels along roads of light. We call them the Lantern Roads.'},
 {who:'pulse',m:'oops',t:'And the lanterns are going dark, one by one. People freeze mid-step. Messengers forget where they were going. We call it the Hush.'},
 {who:'you',t:'Why would that call me?'},
 {who:'pulse',m:'idle',t:'Because of what you carry. An old art Lumara has no word for: reading what a body is telling you. Where the trouble is, what is causing it, and what to do next.'},
 {who:'pulse',m:'happy',t:'Walk the roads with me, {you}. Meet the people along them. Listen to their stories. We might light them again.'}
];

Animed.sealed=[
 {name:'The Ember Forge',system:'Cardiology'},
 {name:'The Windless Reach',system:'Pulmonology'},
 {name:'The Tidal Vaults',system:'Nephrology'},
 {name:'The Gilded Orchard',system:'Gastroenterology'},
 {name:'The Clockwork Spire',system:'Endocrinology'}
];
