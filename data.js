// ==========================================
// 🟢 简单池 (Easy Pool) - 日常事物与基础引申义
// ==========================================
const easyPool = [
    {
        contextPart1: "The carpenter used the rough ",
        contextPart2: " to build the sturdy walls of the wooden cabin.",
        options: ["Timber", "Bark", "Wood"], correctWord: "Bark",
        coreMeaning: "The sharp explosive cry of a dog or fox.",
        hiddenMeaning: "The tough protective outer sheath of the trunk and branches of a tree.",
        threatEmoji: "🐺"
    },
    {
        contextPart1: "The blacksmith hammered the rusty iron ",
        contextPart2: " into the wooden plank to secure the door.",
        options: ["Spike", "Nail", "Pin"], correctWord: "Nail",
        coreMeaning: "A hard protective covering at the end of a human finger or toe.",
        hiddenMeaning: "A small metal spike with a broadened flat head, driven into wood to join things together.",
        threatEmoji: "🧟"
    },
    {
        contextPart1: "The vampire transformed into a screeching ",
        contextPart2: " and flew out of the castle window.",
        options: ["Bird", "Bat", "Owl"], correctWord: "Bat",
        coreMeaning: "An implement with a handle and a solid surface, used in sports for hitting the ball.",
        hiddenMeaning: "A mainly nocturnal mammal capable of sustained flight.",
        threatEmoji: "🦇"
    },
    {
        contextPart1: "The detective carefully opened the sealed ",
        contextPart2: " to read the ransom demand.",
        options: ["Paper", "Note", "Letter"], correctWord: "Letter",
        coreMeaning: "A character representing one or more of the sounds used in speech (e.g., A, B, C).",
        hiddenMeaning: "A written, typed, or printed communication, sent in an envelope by mail.",
        threatEmoji: "🕵️"
    },
    {
        contextPart1: "The autumn breeze made the golden ",
        contextPart2: " fall gently from the ancient oak tree.",
        options: ["Leaf", "Page", "Drop"], correctWord: "Leaf",
        coreMeaning: "A blank or printed page of a book.",
        hiddenMeaning: "A flattened structure of a higher plant, typically green and blade-like.",
        threatEmoji: "🍂"
    },
    {
        contextPart1: "To secure the heavy dungeon gates, the guard needed a massive iron ",
        contextPart2: " .",
        options: ["Rod", "Bar", "Pole"], correctWord: "Bar",
        coreMeaning: "A counter or room where alcoholic drinks are served.",
        hiddenMeaning: "A rigid piece of metal or wood, used as a fastening or obstruction.",
        threatEmoji: "👹"
    },
    {
        contextPart1: "To light the dark dungeon, the wizard struck a ",
        contextPart2: " against the rough stone wall.",
        options: ["Game", "Match", "Fire"], correctWord: "Match",
        coreMeaning: "A contest in which people or teams compete against each other in a particular sport.",
        hiddenMeaning: "A short, thin piece of wood or cardboard used to light a fire.",
        threatEmoji: "🔥"
    },
    {
        contextPart1: "The foot race ended in a dead ",
        contextPart2: " , with both runners crossing the finish line at the exact same millisecond.",
        options: ["Knot", "Draw", "Tie"], correctWord: "Tie",
        coreMeaning: "A piece of string, cord, or the like used for fastening or tying something.",
        hiddenMeaning: "A result in a game or other competitive situation in which two or more competitors or teams have the same score or ranking.",
        threatEmoji: "🏁"
    },
    {
        contextPart1: "The rich merchant checked his gold pocket ",
        contextPart2: " to see if the train was arriving on time.",
        options: ["Clock", "Watch", "Look"], correctWord: "Watch",
        coreMeaning: "To look at or observe attentively over a period of time.",
        hiddenMeaning: "A small timepiece worn typically on a strap on one's wrist.",
        threatEmoji: "⏱️"
    },
    {
        contextPart1: "Be careful not to ",
        contextPart2: " over that exposed tree root in the dark forest.",
        options: ["Fall", "Trip", "Journey"], correctWord: "Trip",
        coreMeaning: "A journey or excursion, especially for pleasure.",
        hiddenMeaning: "Catch one's foot on something and stumble or fall.",
        threatEmoji: "🌲"
    },
    {
        contextPart1: "The knight couldn't cross the bridge because of a huge wagon ",
        contextPart2: " blocking the entire road.",
        options: ["Jelly", "Jam", "Block"], correctWord: "Jam",
        coreMeaning: "A sweet spread or preserve made from fruit and sugar boiled to a thick consistency.",
        hiddenMeaning: "An instance of a thing or things being squeezed or packed tightly into a space; a congestion.",
        threatEmoji: "🚧"
    },
    {
        contextPart1: "The elephant used its long, muscular ",
        contextPart2: " to spray water on the laughing tourists.",
        options: ["Nose", "Trunk", "Chest"], correctWord: "Trunk",
        coreMeaning: "The main wooden stem of a tree as distinct from its branches and roots.",
        hiddenMeaning: "The elongated, prehensile nose of an elephant.",
        threatEmoji: "🐘"
    },
    {
        contextPart1: "Every citizen in the kingdom has the basic ",
        contextPart2: " to speak freely without fear of the king.",
        options: ["Left", "Right", "Power"], correctWord: "Right",
        coreMeaning: "On, toward, or relating to the side of a human body or of a thing that is to the east when the person or thing is facing north (direction).",
        hiddenMeaning: "A moral or legal entitlement to have or obtain something or to act in a certain way.",
        threatEmoji: "⚖️"
    },
    {
        contextPart1: "The magic feather was so ",
        contextPart2: " that it floated upwards on the gentlest breeze.",
        options: ["Bright", "Light", "Heavy"], correctWord: "Light",
        coreMeaning: "The natural agent that stimulates sight and makes things visible.",
        hiddenMeaning: "Having little weight; not heavy.",
        threatEmoji: "🪶"
    },
    {
        contextPart1: "The pirate captain lost his left ",
        contextPart2: " in a fierce sword fight many years ago.",
        options: ["Hand", "Arm", "Weapon"], correctWord: "Arm",
        coreMeaning: "A thing designed or used for inflicting bodily harm or physical damage (a weapon).",
        hiddenMeaning: "Each of the two upper limbs of the human body from the shoulder to the hand.",
        threatEmoji: "🏴‍☠️"
    },
    {
        contextPart1: "The princess wore a beautiful diamond ",
        contextPart2: " on her index finger.",
        options: ["Sound", "Ring", "Bell"], correctWord: "Ring",
        coreMeaning: "Make a clear resonant or vibrating sound.",
        hiddenMeaning: "A small circular band, typically of precious metal, worn on a finger as an ornament.",
        threatEmoji: "💍"
    },
    {
        contextPart1: "The hungry travelers decided to ",
        contextPart2: " their carriage near the river for the night.",
        options: ["Garden", "Park", "Stop"], correctWord: "Park",
        coreMeaning: "A large public green area in a town, used for recreation.",
        hiddenMeaning: "Bring a vehicle that one is driving to a halt and leave it temporarily.",
        threatEmoji: "🏕️"
    },
    {
        contextPart1: "The king's army was preparing to ",
        contextPart2: " a rebellion in the southern provinces.",
        options: ["Smash", "Crush", "Love"], correctWord: "Crush",
        coreMeaning: "A brief but intense infatuation for someone, especially someone unattainable.",
        hiddenMeaning: "Deform, pulverize, or force inwards by compressing forcefully.",
        threatEmoji: "⚔️"
    },
    {
        contextPart1: "The archer tightened the string on his ",
        contextPart2: " before aiming at the target.",
        options: ["Bend", "Bow", "Knot"], correctWord: "Bow",
        coreMeaning: "To bend the head or upper part of the body in a gesture of respect or greeting.",
        hiddenMeaning: "A weapon for shooting arrows, typically made of a curved piece of wood joined at both ends by a taut string.",
        threatEmoji: "🏹"
    },
    {
        contextPart1: "The scholar needed new reading ",
        contextPart2: " because his vision was getting blurry.",
        options: ["Cups", "Glasses", "Lenses"], correctWord: "Glasses",
        coreMeaning: "Drinking containers made of glass.",
        hiddenMeaning: "A pair of lenses set in a frame resting on the nose and ears, used to correct or assist defective eyesight.",
        threatEmoji: "👓"
    },
    {
        contextPart1: "The farmer went to the well to fetch water, using a wooden ",
        contextPart2: " from the old tree.",
        options: ["Spring", "Coil", "Jump"], correctWord: "Spring",
        coreMeaning: "The season after winter and before summer.",
        hiddenMeaning: "A natural source of water formed when water from an aquifer percolates up to the earth's surface.",
        threatEmoji: "💧"
    },
    {
        contextPart1: "To protect the village, the leader decided to ",
        contextPart2: " a new group of guards in sword fighting.",
        options: ["Vehicle", "Train", "Teach"], correctWord: "Train",
        coreMeaning: "A series of connected railway carriages or wagons moved by a locomotive.",
        hiddenMeaning: "Teach a person or animal a particular skill or type of behavior through practice and instruction.",
        threatEmoji: "🛡️"
    },
    {
        contextPart1: "The merchant packed his goods into a sturdy wooden ",
        contextPart2: " for the long sea voyage.",
        options: ["Dog", "Box", "Bark"], correctWord: "Box",
        coreMeaning: "To fight an opponent using one's fists (boxing).",
        hiddenMeaning: "A container with a flat base and sides, typically square or rectangular and having a lid.",
        threatEmoji: "📦"
    },
    {
        contextPart1: "The artist painted a beautiful picture of a gentle ",
        contextPart2: " flowing down the mountain.",
        options: ["Stream", "Video", "River"], correctWord: "Stream",
        coreMeaning: "A continuous flow of data or video over the internet.",
        hiddenMeaning: "A small, narrow river.",
        threatEmoji: "⛰️"
    },
    {
        contextPart1: "The judge hit the table with his hammer and demanded order in the ",
        contextPart2: " .",
        options: ["Yard", "Court", "Field"], correctWord: "Court",
        coreMeaning: "A quadrangular area, either open or covered, marked out for ball games such as tennis or basketball.",
        hiddenMeaning: "A tribunal presided over by a judge, judges, or a magistrate in civil and criminal cases.",
        threatEmoji: "⚖️"
    },
    {
        contextPart1: "The little girl loved to ",
        contextPart2: " her favorite doll in a pink dress.",
        options: ["Coat", "Dress", "Gown"], correctWord: "Dress",
        coreMeaning: "A one-piece garment for a woman or girl that covers the body and extends down over the legs.",
        hiddenMeaning: "Put clothes on (oneself or someone else).",
        threatEmoji: "👗"
    },
    {
        contextPart1: "The sailor dropped the heavy iron ",
        contextPart2: " into the sea to keep the ship from drifting.",
        options: ["News", "Anchor", "Weight"], correctWord: "Anchor",
        coreMeaning: "A person who presents and coordinates a live television or radio program (news anchor).",
        hiddenMeaning: "A heavy object attached to a rope or chain and used to moor a vessel to the sea bottom.",
        threatEmoji: "⚓"
    },
    {
        contextPart1: "The baker rolled the dough into a perfect ",
        contextPart2: " shape before putting it in the oven.",
        options: ["Ball", "Dance", "Sphere"], correctWord: "Ball",
        coreMeaning: "A formal social gathering for dancing.",
        hiddenMeaning: "A solid or hollow spherical or egg-shaped object.",
        threatEmoji: "🍞"
    },
    {
        contextPart1: "The loud thunder made the frightened horse ",
        contextPart2: " across the open field.",
        options: ["Screw", "Bolt", "Run"], correctWord: "Bolt",
        coreMeaning: "A metal pin or bar, in particular one used to fasten things together.",
        hiddenMeaning: "To run away suddenly out of control (especially of a horse).",
        threatEmoji: "🐎"
    },
    {
        contextPart1: "The king wore a massive gold ",
        contextPart2: " around his neck as a symbol of his wealth.",
        options: ["Link", "Chain", "Store"], correctWord: "Chain",
        coreMeaning: "A sequence of items of the same type forming a line (like a chain of retail stores).",
        hiddenMeaning: "A series of linked metal rings used for fastening or securing something, or for pulling loads.",
        threatEmoji: "👑"
    },
    {
        contextPart1: "The giant frog tried to catch the annoying ",
        contextPart2: " with its incredibly long tongue.",
        options: ["Bird", "Bug", "Fly"], correctWord: "Fly",
        coreMeaning: "To move through the air using wings.",
        hiddenMeaning: "A flying insect with a single pair of transparent wings.",
        threatEmoji: "🐸"
    },
    {
        contextPart1: "The sailor was almost knocked off the deck by a massive ocean ",
        contextPart2: " .",
        options: ["Tide", "Wave", "Surf"], correctWord: "Wave",
        coreMeaning: "To move one's hand to and fro in greeting or as a signal.",
        hiddenMeaning: "A long body of water curling into an arched form and breaking on the shore.",
        threatEmoji: "🌊"
    },
    {
        contextPart1: "The thirsty villager lowered a wooden bucket deep into the stone ",
        contextPart2: " .",
        options: ["Hole", "Pit", "Well"], correctWord: "Well",
        coreMeaning: "In a good or satisfactory way.",
        hiddenMeaning: "A deep hole sunk into the earth to obtain water.",
        threatEmoji: "🪣"
    },
    {
        contextPart1: "The bard wrote a tragic three-act ",
        contextPart2: " for the king's entertainment.",
        options: ["Song", "Play", "Show"], correctWord: "Play",
        coreMeaning: "Engage in activity for enjoyment and recreation.",
        hiddenMeaning: "A dramatic work for the stage or to be broadcast.",
        threatEmoji: "🎭"
    },
    {
        contextPart1: "The assassin carefully poisoned the sharp ",
        contextPart2: " of his dagger.",
        options: ["Tip", "Edge", "Point"], correctWord: "Point",
        coreMeaning: "Direct someone's attention towards something by extending one's finger.",
        hiddenMeaning: "The tapered, sharp end of a tool, weapon, or other object.",
        threatEmoji: "🗡️"
    },
    {
        contextPart1: "The tavern owner hung a wooden ",
        contextPart2: " above the door to attract customers.",
        options: ["Board", "Sign", "Mark"], correctWord: "Sign",
        coreMeaning: "To write one's name on a letter or document to authorize it.",
        hiddenMeaning: "A piece of wood, metal, or plastic with words or pictures on it, giving information.",
        threatEmoji: "🪧"
    },
    {
        contextPart1: "The ancient mariner navigated the ship by following the North ",
        contextPart2: " in the night sky.",
        options: ["Moon", "Sun", "Star"], correctWord: "Star",
        coreMeaning: "A highly famous entertainer or sports player.",
        hiddenMeaning: "A fixed luminous point in the night sky.",
        threatEmoji: "⭐"
    },
    {
        contextPart1: "The carpenter cut a long wooden ",
        contextPart2: " to fix the broken deck of the pirate ship.",
        options: ["Plank", "Wood", "Board"], correctWord: "Board",
        coreMeaning: "To get on or into a ship, aircraft, or other vehicle.",
        hiddenMeaning: "A long, thin, flat piece of wood or other hard material.",
        threatEmoji: "🪵"
    },
    {
        contextPart1: "The brave knight led the cavalry ",
        contextPart2: " against the approaching goblin army.",
        options: ["Attack", "Rush", "Charge"], correctWord: "Charge",
        coreMeaning: "Demand an amount as a price for a service rendered.",
        hiddenMeaning: "A headlong rush forward, typically one made by attacking soldiers.",
        threatEmoji: "🐎"
    },
    {
        contextPart1: "The mysterious warrior wore a terrifying metal mask to cover his ",
        contextPart2: " .",
        options: ["Head", "Skin", "Face"], correctWord: "Face",
        coreMeaning: "To confront and deal with or accept a difficult situation.",
        hiddenMeaning: "The front part of a person's head from the forehead to the chin.",
        threatEmoji: "😠"
    },
    {
        contextPart1: "The executioner raised his heavy axe towards the traitor's ",
        contextPart2: " .",
        options: ["Neck", "Skull", "Head"], correctWord: "Head",
        coreMeaning: "The person in charge of an organization or group.",
        hiddenMeaning: "The upper part of the human body, containing the brain, mouth, and sense organs.",
        threatEmoji: "💀"
    },
    {
        contextPart1: "The elf archer scored a direct ",
        contextPart2: " on the center of the wooden target.",
        options: ["Strike", "Shot", "Hit"], correctWord: "Hit",
        coreMeaning: "A successful and popular song, movie, or product.",
        hiddenMeaning: "An instance of striking the target that is aimed at.",
        threatEmoji: "🎯"
    },
    {
        contextPart1: "After a long journey through the mountains, the heroes took a well-deserved ",
        contextPart2: " at the inn.",
        options: ["Break", "Nap", "Rest"], correctWord: "Rest",
        coreMeaning: "The remaining part of something.",
        hiddenMeaning: "A period of relaxing, sleeping, or doing nothing after a period of activity.",
        threatEmoji: "🛌"
    },
    {
        contextPart1: "The dragon's roar was the most terrifying ",
        contextPart2: " the villagers had ever heard.",
        options: ["Noise", "Roar", "Sound"], correctWord: "Sound",
        coreMeaning: "In good condition; not damaged, injured, or diseased (e.g., safe and sound).",
        hiddenMeaning: "Vibrations that travel through the air or another medium and can be heard.",
        threatEmoji: "🔊"
    },
    {
        contextPart1: "The merchant sold magic potions from a small wooden ",
        contextPart2: " in the busy market.",
        options: ["Booth", "Table", "Stand"], correctWord: "Stand",
        coreMeaning: "To have or maintain an upright position, supported by one's feet.",
        hiddenMeaning: "A small stall or booth in a street or market for the sale of goods.",
        threatEmoji: "⛺"
    },
    {
        contextPart1: "The old wizard leaned heavily on a carved wooden ",
        contextPart2: " as he walked up the hill.",
        options: ["Branch", "Pole", "Stick"], correctWord: "Stick",
        coreMeaning: "To push a sharp or pointed object into or through something.",
        hiddenMeaning: "A thin piece of wood that has fallen or been cut from a tree.",
        threatEmoji: "🌿"
    },
    {
        contextPart1: "The underground maze was so dark that the hero missed a crucial ",
        contextPart2: " and got lost.",
        options: ["Bend", "Curve", "Turn"], correctWord: "Turn",
        coreMeaning: "An opportunity or obligation to do something that comes successively to each of a group (your turn).",
        hiddenMeaning: "A place where a road or path changes direction.",
        threatEmoji: "↪️"
    },
    {
        contextPart1: "The dwarf blacksmith took great pride in his metal ",
        contextPart2: " and crafted the finest swords.",
        options: ["Craft", "Job", "Work"], correctWord: "Work",
        coreMeaning: "Activity involving mental or physical effort done in order to achieve a purpose.",
        hiddenMeaning: "A thing or things produced as a result of action, especially a painting, book, or piece of music/craft.",
        threatEmoji: "⚒️"
    },
    {
        contextPart1: "The rogue tied a leather ",
        contextPart2: " tightly around his wounded arm to stop the bleeding.",
        options: ["Strap", "Rope", "Band"], correctWord: "Band",
        coreMeaning: "A small group of musicians who play popular music together.",
        hiddenMeaning: "A flat, thin strip or loop of material put around something.",
        threatEmoji: "🤕"
    },
    {
        contextPart1: "Because his sword was in his right hand, the knight raised his shield with his ",
        contextPart2: " arm.",
        options: ["Weak", "Right", "Left"], correctWord: "Left",
        coreMeaning: "Past tense of leave; gone away from a place.",
        hiddenMeaning: "On, toward, or relating to the side of a human body to the west when facing north.",
        threatEmoji: "🛡️"
    }
];

const mediumPool = [
    {
        contextPart1: "The powerful wizard used his ancient tome to cast a protective ",
        contextPart2: " over the village.",
        options: ["Word", "Spell", "Charm"], correctWord: "Spell",
        coreMeaning: "To write or name the letters that form a word.",
        hiddenMeaning: "A form of words used as a magical charm or incantation.",
        threatEmoji: "🧙"
    },
    {
        contextPart1: "The general felt a freezing ",
        contextPart2: " entering the command tent, signaling a harsh winter battle.",
        options: ["Draft", "Breeze", "Wind"], correctWord: "Draft",
        coreMeaning: "A preliminary version of a piece of writing or document.",
        hiddenMeaning: "A current of unpleasantly cold air blowing through a room or space.",
        threatEmoji: "🧊"
    },
    {
        contextPart1: "The thief tried to ",
        contextPart2: " the high castle wall under the cover of darkness.",
        options: ["Climb", "Scale", "Jump"], correctWord: "Scale",
        coreMeaning: "An instrument for weighing things.",
        hiddenMeaning: "To climb up or over (something high and steep).",
        threatEmoji: "🦹"
    },
    {
        contextPart1: "The knight washed his armor in the river's strong ",
        contextPart2: " , nearly losing his helmet in the rushing water.",
        options: ["Shock", "Current", "Flow"], correctWord: "Current",
        coreMeaning: "Belonging to the present time; happening or being used or done now.",
        hiddenMeaning: "A body of water or air moving in a definite direction.",
        threatEmoji: "🌊"
    },
    {
        contextPart1: "The deadly assassin decided to ",
        contextPart2: " a deep grudge against the royal family for decades.",
        options: ["Keep", "Harbor", "Hold"], correctWord: "Harbor",
        coreMeaning: "A place on the coast where vessels may find shelter (a port).",
        hiddenMeaning: "To keep a negative thought or feeling (typically a grudge) in one's mind secretly.",
        threatEmoji: "🥷"
    },
    {
        contextPart1: "The exhausted heroes rested by the grassy river ",
        contextPart2: " before crossing the dangerous bridge.",
        options: ["Store", "Build", "Bank"], correctWord: "Bank",
        coreMeaning: "A financial institution where people keep their money.",
        hiddenMeaning: "The land alongside or sloping down to a river or lake.",
        threatEmoji: "🏞️"
    },
    {
        contextPart1: "The shipbuilder sealed the wooden hull with boiling black ",
        contextPart2: " to make the boat completely waterproof.",
        options: ["Tar", "Pitch", "Goo"], correctWord: "Pitch",
        coreMeaning: "To throw or fling roughly or casually (like in baseball).",
        hiddenMeaning: "A sticky resinous black or dark brown substance used for waterproofing.",
        threatEmoji: "🏴‍☠️"
    },
    {
        contextPart1: "The royal chef added rare spices to ",
        contextPart2: " the dragon-meat stew.",
        options: ["Taste", "Season", "Spice"], correctWord: "Season",
        coreMeaning: "Each of the four divisions of the year (spring, summer, autumn, winter).",
        hiddenMeaning: "To add salt, herbs, pepper, or other spices to food.",
        threatEmoji: "🍲"
    },
    {
        contextPart1: "The blacksmith used a heavy iron ",
        contextPart2: " to smooth the rough edges of the legendary sword.",
        options: ["Tool", "File", "Folder"], correctWord: "File",
        coreMeaning: "A folder or box for holding loose papers that are typically arranged in a particular order.",
        hiddenMeaning: "A tool with a roughened surface, typically of steel, used for smoothing or shaping a hard material.",
        threatEmoji: "⚒️"
    },
    {
        contextPart1: "The king ordered the royal ",
        contextPart2: " to produce ten thousand new gold coins for the war.",
        options: ["Herb", "Mint", "Bank"], correctWord: "Mint",
        coreMeaning: "An aromatic plant native to temperate regions, used as a culinary herb.",
        hiddenMeaning: "A place where money is coined, especially under state authority.",
        threatEmoji: "🪙"
    },
    {
        contextPart1: "The spy uncovered a wicked ",
        contextPart2: " to overthrow the queen during the festival.",
        options: ["Farm", "Plot", "Land"], correctWord: "Plot",
        coreMeaning: "A small piece of ground marked out for a purpose such as building or gardening.",
        hiddenMeaning: "A secret plan made by a group of people to do something illegal or harmful.",
        threatEmoji: "📜"
    },
    {
        contextPart1: "The old sea captain had a very ",
        contextPart2: " look on his face when he saw the approaching pirate ship.",
        options: ["Back", "Stern", "Rear"], correctWord: "Stern",
        coreMeaning: "The rearmost part of a ship or boat.",
        hiddenMeaning: "Strict and severe in appearance or manner.",
        threatEmoji: "😠"
    },
    {
        contextPart1: "The scholar found an ancient, dusty ",
        contextPart2: " of magic hidden in the restricted library.",
        options: ["Loudness", "Volume", "Sound"], correctWord: "Volume",
        coreMeaning: "The amount of space that a substance or object occupies, or the degree of loudness.",
        hiddenMeaning: "A book forming part of a work or series.",
        threatEmoji: "📚"
    },
    {
        contextPart1: "Despite the drought, the magical farm produced a massive golden ",
        contextPart2: " of wheat.",
        options: ["Surrender", "Yield", "Stop"], correctWord: "Yield",
        coreMeaning: "To give way to arguments, demands, or pressure (to surrender).",
        hiddenMeaning: "An amount produced of an agricultural or industrial product.",
        threatEmoji: "🌾"
    },
    {
        contextPart1: "With a mighty ",
        contextPart2: " , the giant wolf jumped completely over the castle wall.",
        options: ["Tie", "Bound", "Leap"], correctWord: "Bound",
        coreMeaning: "Tied or secured with a rope or string.",
        hiddenMeaning: "A leaping movement upward.",
        threatEmoji: "🐺"
    },
    {
        contextPart1: "The cave troll swung his massive wooden ",
        contextPart2: " at the fragile knight.",
        options: ["Group", "Club", "Party"], correctWord: "Club",
        coreMeaning: "An association or organization dedicated to a particular interest or activity.",
        hiddenMeaning: "A heavy stick with a thick end, especially one used as a weapon.",
        threatEmoji: "🧌"
    },
    {
        contextPart1: "The commander ordered his troops to do their morning sword ",
        contextPart2: " before breakfast.",
        options: ["Tool", "Drill", "Hole"], correctWord: "Drill",
        coreMeaning: "A hand tool or machine with a rotating cutting tip, used for making holes.",
        hiddenMeaning: "Instruction or training in military exercises.",
        threatEmoji: "⚔️"
    },
    {
        contextPart1: "The villagers gathered to trade their goods at the annual summer ",
        contextPart2: " .",
        options: ["Just", "Fair", "Equal"], correctWord: "Fair",
        coreMeaning: "Treating people equally without favoritism or discrimination.",
        hiddenMeaning: "A gathering of stalls and amusements for public entertainment.",
        threatEmoji: "🎪"
    },
    {
        contextPart1: "Because he rode his horse too fast through the market, the guard made him pay a heavy ",
        contextPart2: " .",
        options: ["Okay", "Fine", "Good"], correctWord: "Fine",
        coreMeaning: "Of high quality, or in a satisfactory state.",
        hiddenMeaning: "A sum of money exacted as a penalty by a court of law or other authority.",
        threatEmoji: "💰"
    },
    {
        contextPart1: "The warrior kept a ",
        contextPart2: " grip on his shield as the dragon breathed fire.",
        options: ["Business", "Firm", "Company"], correctWord: "Firm",
        coreMeaning: "A commercial or professional business organization.",
        hiddenMeaning: "Having a solid, almost unyielding surface or structure; strongly felt or held.",
        threatEmoji: "🛡️"
    },
    {
        contextPart1: "The legendary armor was crafted from the impenetrable ",
        contextPart2: " of an ancient black dragon.",
        options: ["Conceal", "Hide", "Cover"], correctWord: "Hide",
        coreMeaning: "To put or keep out of sight; conceal from the view of others.",
        hiddenMeaning: "The skin of an animal, especially when tanned or dressed.",
        threatEmoji: "🐉"
    },
    {
        contextPart1: "Looking over the cliff, the scout saw a massive ",
        contextPart2: " of orc soldiers marching toward them.",
        options: ["Guest", "Host", "Party"], correctWord: "Host",
        coreMeaning: "A person who receives or entertains other people as guests.",
        hiddenMeaning: "A large number of people or things (an army).",
        threatEmoji: "👹"
    },
    {
        contextPart1: "The wise oracle told the hero that patience was the ",
        contextPart2: " to winning the upcoming war.",
        options: ["Lock", "Key", "Metal"], correctWord: "Key",
        coreMeaning: "A small piece of shaped metal with incisions cut to fit the wards of a particular lock.",
        hiddenMeaning: "A thing that provides a means of gaining access to or understanding something crucial.",
        threatEmoji: "🗝️"
    },
    {
        contextPart1: "The weapon smith poured the molten silver into a clay ",
        contextPart2: " to shape the magic dagger.",
        options: ["Fungi", "Mold", "Spoil"], correctWord: "Mold",
        coreMeaning: "A furry growth of minute fungal hyphae occurring typically in moist conditions.",
        hiddenMeaning: "A hollow container used to give shape to molten or hot liquid material.",
        threatEmoji: "🗡️"
    },
    {
        contextPart1: "The church's grand pipe ",
        contextPart2: " played a terrifying melody that echoed through the graveyard.",
        options: ["Heart", "Organ", "Lung"], correctWord: "Organ",
        coreMeaning: "A part of an organism that is typically self-contained and has a specific vital function.",
        hiddenMeaning: "A large musical instrument having rows of tuned pipes sounded by compressed air.",
        threatEmoji: "🎹"
    },
    {
        contextPart1: "The cavalry charged across the wide, grassy ",
        contextPart2: " , their banners flying in the wind.",
        options: ["Simple", "Plain", "Clear"], correctWord: "Plain",
        coreMeaning: "Not decorated or elaborate; simple or ordinary in character.",
        hiddenMeaning: "A large area of flat land with few trees.",
        threatEmoji: "🐎"
    },
    {
        contextPart1: "The merchant found a very ",
        contextPart2: " and glowing gemstone in the deepest part of the mine.",
        options: ["Meat", "Rare", "Cooked"], correctWord: "Rare",
        coreMeaning: "(Of meat, especially beef) lightly cooked, so that the inside is still red.",
        hiddenMeaning: "(Of an event, situation, or condition) not occurring very often.",
        threatEmoji: "💎"
    },
    {
        contextPart1: "The greedy king locked all his stolen diamonds inside an iron ",
        contextPart2: " in his bedroom.",
        options: ["Secure", "Safe", "Protected"], correctWord: "Safe",
        coreMeaning: "Protected from or not exposed to danger or risk.",
        hiddenMeaning: "A strong fireproof cabinet with a complex lock, used for the storage of valuables.",
        threatEmoji: "🔐"
    },
    {
        contextPart1: "To build the siege tower, the engineers had to ",
        contextPart2: " huge logs into perfect wooden planks.",
        options: ["Look", "Saw", "Watch"], correctWord: "Saw",
        coreMeaning: "Past tense of 'see' (to perceive with the eyes).",
        hiddenMeaning: "To cut (something, especially wood) using a hand tool with a toothed blade.",
        threatEmoji: "🪚"
    },
    {
        contextPart1: "The royal cook ordered his helpers to roast a whole ",
        contextPart2: " for the magnificent victory feast.",
        options: ["Guide", "Steer", "Drive"], correctWord: "Steer",
        coreMeaning: "To guide or control the movement of a vehicle, vessel, or aircraft.",
        hiddenMeaning: "A piece of male cattle that has been castrated, raised for beef.",
        threatEmoji: "🥩"
    },
    {
        contextPart1: "The peasants worked hard to ",
        contextPart2: " enough grain in the castle cellar before winter arrived.",
        options: ["Shop", "Store", "Market"], correctWord: "Store",
        coreMeaning: "A retail establishment selling items to the public.",
        hiddenMeaning: "To keep or accumulate something for future use.",
        threatEmoji: "🌾"
    },
    {
        contextPart1: "The alchemist used a cloth to ",
        contextPart2: " the magic potion, removing all the toxic lumps.",
        options: ["Stress", "Strain", "Pull"], correctWord: "Strain",
        coreMeaning: "To force (a part of one's body or oneself) to make a strenuous or unusually great effort.",
        hiddenMeaning: "To pour (a mainly liquid substance) through a porous or perforated device to separate out solid matter.",
        threatEmoji: "🧪"
    },
    {
        contextPart1: "A tiny, swift-flying ",
        contextPart2: " zoomed past the archer's ear during the battle.",
        options: ["Eat", "Swallow", "Drink"], correctWord: "Swallow",
        coreMeaning: "To cause or allow food or drink to pass down the throat.",
        hiddenMeaning: "A small migratory bird with long, pointed wings and a forked tail.",
        threatEmoji: "🐦"
    },
    {
        contextPart1: "During the sword fight, a sharp blade caused a large ",
        contextPart2: " in the hero's magical cloak.",
        options: ["Cry", "Tear", "Weep"], correctWord: "Tear",
        coreMeaning: "A drop of clear salty liquid secreted from glands in a person's eye when they cry.",
        hiddenMeaning: "A hole or split in something caused by it having been pulled apart forcefully.",
        threatEmoji: "🧥"
    },
    {
        contextPart1: "The long and brutal war took a heavy ",
        contextPart2: " on the kingdom's economy and population.",
        options: ["Ring", "Toll", "Bell"], correctWord: "Toll",
        coreMeaning: "To sound a large bell with slow, uniform strokes.",
        hiddenMeaning: "The cost or damage resulting from something.",
        threatEmoji: "💀"
    },
    {
        contextPart1: "The swordsman took a deep breath and prepared to ",
        contextPart2: " his blade from its scabbard.",
        options: ["Pull", "Draw", "Take"], correctWord: "Draw",
        coreMeaning: "To produce a picture or diagram by making lines and marks.",
        hiddenMeaning: "To pull or drag (something such as a sword) so as to make it move.",
        threatEmoji: "🗡️"
    },
    {
        contextPart1: "The carpenter sanded the wooden table until the surface was perfectly ",
        contextPart2: " .",
        options: ["Flat", "Smooth", "Even"], correctWord: "Even",
        coreMeaning: "Used to emphasize something surprising or extreme.",
        hiddenMeaning: "Flat and smooth; not bumpy or irregular.",
        threatEmoji: "🪚"
    },
    {
        contextPart1: "The royal diplomat offered a generous golden ",
        contextPart2: " to the rival king to ensure peace.",
        options: ["Gift", "Present", "Offer"], correctWord: "Present",
        coreMeaning: "The period of time now occurring.",
        hiddenMeaning: "A thing given to someone as a gift.",
        threatEmoji: "🎁"
    },
    {
        contextPart1: "The elven archers used the thick forest canopy as a natural ",
        contextPart2: " to hide their movements.",
        options: ["Shield", "Cover", "Screen"], correctWord: "Screen",
        coreMeaning: "The flat panel on a TV or computer on which images are displayed.",
        hiddenMeaning: "Something that provides concealment or protection.",
        threatEmoji: "🌲"
    },
    {
        contextPart1: "The captain needed a highly loyal officer to ",
        contextPart2: " his command during the chaotic battle.",
        options: ["Support", "Help", "Second"], correctWord: "Second",
        coreMeaning: "Coming after the first in time or order.",
        hiddenMeaning: "To formally support or endorse a person or a motion.",
        threatEmoji: "⚔️"
    },
    {
        contextPart1: "The alchemist nervously watched as his magic potion reached the final ",
        contextPart2: " of brewing.",
        options: ["Phase", "Step", "Stage"], correctWord: "Stage",
        coreMeaning: "A raised floor or platform, typically in a theater.",
        hiddenMeaning: "A point, period, or step in a process or development.",
        threatEmoji: "🧪"
    },
    {
        contextPart1: "After running for three days, the messenger arrived in a terrible ",
        contextPart2: " of physical exhaustion.",
        options: ["Condition", "Shape", "State"], correctWord: "State",
        coreMeaning: "A nation or territory considered as an organized political community.",
        hiddenMeaning: "The particular condition that someone or something is in at a specific time.",
        threatEmoji: "🏃"
    },
    {
        contextPart1: "The highly loyal ",
        contextPart2: " kneeled respectfully before the Queen to deliver the news.",
        options: ["Citizen", "Vassal", "Subject"], correctWord: "Subject",
        coreMeaning: "A branch of knowledge studied or taught in a school.",
        hiddenMeaning: "A member of a state other than its ruler, especially one owing allegiance to a monarch.",
        threatEmoji: "👑"
    },
    {
        contextPart1: "The scholar studied an ancient, forbidden ",
        contextPart2: " of blood magic in the dark library.",
        options: ["Kind", "Sort", "Type"], correctWord: "Type",
        coreMeaning: "To write something on a typewriter or computer keyboard.",
        hiddenMeaning: "A category of people or things having common characteristics.",
        threatEmoji: "📚"
    },
    {
        contextPart1: "The giant masons used ropes to move a massive stone ",
        contextPart2: " to build the pyramid.",
        options: ["Cube", "Brick", "Block"], correctWord: "Block",
        coreMeaning: "To make the movement or flow in (a passage, pipe, or road) difficult or impossible.",
        hiddenMeaning: "A large solid piece of hard material, especially rock, stone, or wood.",
        threatEmoji: "🧱"
    },
    {
        contextPart1: "The dockworkers used a tall wooden ",
        contextPart2: " to lift the heavy cargo off the trading ship.",
        options: ["Lifter", "Machine", "Crane"], correctWord: "Crane",
        coreMeaning: "A tall, long-legged, long-necked bird.",
        hiddenMeaning: "A tall machine used for moving heavy objects by suspending them from a projecting arm.",
        threatEmoji: "🏗️"
    },
    {
        contextPart1: "The dwarfs dug deep into the mountain, risking their lives to expand their gold ",
        contextPart2: " .",
        options: ["Cave", "Tunnel", "Mine"], correctWord: "Mine",
        coreMeaning: "Used to refer to a thing or things belonging to or associated with the speaker.",
        hiddenMeaning: "An excavation in the earth for extracting coal or other minerals.",
        threatEmoji: "⛏️"
    },
    {
        contextPart1: "A terribly long, cold ",
        contextPart2: " ruined all the village's crops this winter.",
        options: ["Period", "Time", "Spell"], correctWord: "Spell",
        coreMeaning: "A form of words used as a magical charm.",
        hiddenMeaning: "A short period of a particular type of weather.",
        threatEmoji: "❄️"
    },
    {
        contextPart1: "The angry cave ogre swung a massive wooden ",
        contextPart2: " at the fragile knight.",
        options: ["Stick", "Bat", "Club"], correctWord: "Club",
        coreMeaning: "An association or organization dedicated to a particular interest or activity.",
        hiddenMeaning: "A heavy stick with a thick end, especially one used as a weapon.",
        threatEmoji: "🧌"
    },
    {
        contextPart1: "The royal guard demanded to ",
        contextPart2: " the merchant's wagon for smuggled weapons.",
        options: ["Search", "Look", "Check"], correctWord: "Check",
        coreMeaning: "A printed form used instead of money to make payments from a bank account.",
        hiddenMeaning: "Examine something in order to determine its accuracy, quality, or condition.",
        threatEmoji: "🔍"
    }
];

const hardPool = [
    {
        contextPart1: "The brave mage used a barrier spell to ",
        contextPart2: " the evil dragon's attempt to destroy the village.",
        options: ["Wrap", "Foil", "Block"], correctWord: "Foil",
        coreMeaning: "A very thin, pliable sheet of aluminum or other metal.",
        hiddenMeaning: "To prevent (something considered wrong or undesirable) from succeeding.",
        threatEmoji: "🔥"
    },
    {
        contextPart1: "Seeing the ruined city, the paladin's face turned completely ",
        contextPart2: " , realizing the war was far from over.",
        options: ["Tomb", "Dark", "Grave"], correctWord: "Grave",
        coreMeaning: "A place of burial for a dead body, typically a hole dug in the ground.",
        hiddenMeaning: "Giving cause for alarm; highly serious or solemn.",
        threatEmoji: "💀"
    },
    {
        contextPart1: "The alien artifact had a highly ",
        contextPart2: " design, unlike anything human scientists had ever seen before.",
        options: ["Book", "Weird", "Novel"], correctWord: "Novel",
        coreMeaning: "A fictitious prose narrative of book length.",
        hiddenMeaning: "Interestingly new or unusual.",
        threatEmoji: "👽"
    },
    {
        contextPart1: "To cross the treacherous swamp, the knight had to pay a silver ",
        contextPart2: " to the mysterious ferryman.",
        options: ["Soft", "Tender", "Cash"], correctWord: "Tender",
        coreMeaning: "Showing gentleness, kindness, and affection.",
        hiddenMeaning: "Money offered in payment (like 'legal tender').",
        threatEmoji: "🪙"
    },
    {
        contextPart1: "The strict monk decided to ",
        contextPart2: " for three days, consuming nothing but water to purify his soul.",
        options: ["Quick", "Fast", "Starve"], correctWord: "Fast",
        coreMeaning: "Moving or capable of moving at high speed.",
        hiddenMeaning: "To abstain from all or some kinds of food or drink.",
        threatEmoji: "🙏"
    },
    {
        contextPart1: "Looking at the old portrait, the exiled prince began to ",
        contextPart2: " for his lost homeland.",
        options: ["Tree", "Weep", "Pine"], correctWord: "Pine",
        coreMeaning: "An evergreen coniferous tree that has clusters of long needle-shaped leaves.",
        hiddenMeaning: "To suffer a mental and physical decline, especially because of a broken heart or missing something.",
        threatEmoji: "👑"
    },
    {
        contextPart1: "Do not mock the old witch, or you will ",
        contextPart2: " her and bring a curse upon us all.",
        options: ["Smell", "Incense", "Anger"], correctWord: "Incense",
        coreMeaning: "A gum, spice, or other substance that is burned for the sweet smell it produces.",
        hiddenMeaning: "To make (someone) very angry.",
        threatEmoji: "👿"
    },
    {
        contextPart1: "During the interrogation, the captured spy tried to ",
        contextPart2: " that the king's own brother was the traitor.",
        options: ["Close", "Intimate", "Hint"], correctWord: "Intimate",
        coreMeaning: "Closely acquainted; familiar, close.",
        hiddenMeaning: "To imply or hint; state or make known.",
        threatEmoji: "🤫"
    },
    {
        contextPart1: "The healer spent all day in the hospital tent, caring for a heavily wounded ",
        contextPart2: " .",
        options: ["Wrong", "Invalid", "Patient"], correctWord: "Invalid",
        coreMeaning: "(Of an argument, statement, or theory) not true because based on incorrect information or flawed logic.",
        hiddenMeaning: "A person made weak or disabled by illness or injury.",
        threatEmoji: "🩹"
    },
    {
        contextPart1: "The detective noticed a ",
        contextPart2: " detail on the map that everyone else had missed.",
        options: ["Time", "Minute", "Tiny"], correctWord: "Minute",
        coreMeaning: "A period of time equal to sixty seconds.",
        hiddenMeaning: "Infinitely or immeasurably small.",
        threatEmoji: "🔍"
    },
    {
        contextPart1: "The brave council member stood up to ",
        contextPart2: " to the tyrant's cruel new laws.",
        options: ["Thing", "Object", "Reject"], correctWord: "Object",
        coreMeaning: "A material thing that can be seen and touched.",
        hiddenMeaning: "To say something to express one's disapproval of or disagreement with something.",
        threatEmoji: "🛑"
    },
    {
        contextPart1: "The illusionist used his crystal ball to ",
        contextPart2: " a terrifying image of a dragon onto the clouds.",
        options: ["Task", "Project", "Cast"], correctWord: "Project",
        coreMeaning: "An individual or collaborative enterprise that is carefully planned to achieve a particular aim.",
        hiddenMeaning: "To throw or cause to move forward or outward; to display (an image) on a surface.",
        threatEmoji: "🔮"
    },
    {
        contextPart1: "The drunken mercenaries got into a loud, violent ",
        contextPart2: " inside the local tavern.",
        options: ["Line", "Row", "Fight"], correctWord: "Row",
        coreMeaning: "A number of people or things in a more or less straight line.",
        hiddenMeaning: "A noisy acrimonious quarrel or dispute. (Pronounced 'rau')",
        threatEmoji: "🍻"
    },
    {
        contextPart1: "The coward swore he would never ",
        contextPart2: " his fellow soldiers on the battlefield.",
        options: ["Sand", "Desert", "Leave"], correctWord: "Desert",
        coreMeaning: "A barren area of landscape where little precipitation occurs.",
        hiddenMeaning: "To abandon (a person, cause, or organization) in a way considered disloyal or treacherous.",
        threatEmoji: "🏃"
    },
    {
        contextPart1: "The mermaid's beautiful, magical song began to ",
        contextPart2: " the sailors, making them steer toward the rocks.",
        options: ["Door", "Entrance", "Charm"], correctWord: "Entrance",
        coreMeaning: "An opening, such as a door, passage, or gate, that allows access to a place.",
        hiddenMeaning: "To fill (someone) with wonder and delight, holding their entire attention.",
        threatEmoji: "🧜‍♀️"
    },
    {
        contextPart1: "Standing in the freezing blizzard, the ranger felt his fingers grow ",
        contextPart2: " than they had ever been before.",
        options: ["Count", "Number", "Colder"], correctWord: "Number",
        coreMeaning: "An arithmetical value, expressed by a word, symbol, or figure.",
        hiddenMeaning: "More numb (deprived of the power of sensation).",
        threatEmoji: "🥶"
    },
    {
        contextPart1: "Fierce hurricane winds continued to ",
        contextPart2: " the walls of the ancient fortress all night.",
        options: ["Food", "Buffet", "Strike"], correctWord: "Buffet",
        coreMeaning: "A meal consisting of several dishes from which guests serve themselves.",
        hiddenMeaning: "(Especially of wind or waves) to strike repeatedly and violently.",
        threatEmoji: "🌪️"
    },
    {
        contextPart1: "The shady merchant tried to ",
        contextPart2: " the naive traveler by selling him fake magic potions.",
        options: ["Wool", "Fleece", "Scam"], correctWord: "Fleece",
        coreMeaning: "The woolly covering of a sheep or goat.",
        hiddenMeaning: "To obtain a great deal of money from (someone), typically by overcharging or swindling them.",
        threatEmoji: "👺"
    },
    {
        contextPart1: "With a massive hole in its wooden hull, the pirate ship will soon ",
        contextPart2: " in the deep ocean.",
        options: ["Creator", "Founder", "Sink"], correctWord: "Founder",
        coreMeaning: "A person who establishes an institution or settlement.",
        hiddenMeaning: "(Of a ship) to fill with water and sink.",
        threatEmoji: "🚢"
    },
    {
        contextPart1: "The spoiled prince did nothing but ",
        contextPart2: " about the cold food and uncomfortable bed.",
        options: ["Bird", "Grouse", "Complain"], correctWord: "Grouse",
        coreMeaning: "A medium to large game bird with a plump body and feathered legs.",
        hiddenMeaning: "To complain pettily; grumble.",
        threatEmoji: "😒"
    },
    {
        contextPart1: "The exhausted messenger rode a tired old ",
        contextPart2: " all the way from the borderlands to the capital.",
        options: ["Chop", "Hack", "Horse"], correctWord: "Hack",
        coreMeaning: "To cut with rough or heavy blows.",
        hiddenMeaning: "A horse for ordinary riding; or a writer producing dull, unoriginal work.",
        threatEmoji: "🐴"
    },
    {
        contextPart1: "Wearing heavy steel armor will seriously ",
        contextPart2: " your ability to swim across the moat.",
        options: ["Basket", "Hamper", "Hinder"], correctWord: "Hamper",
        coreMeaning: "A large basket with a lid, used for laundry.",
        hiddenMeaning: "To hinder or impede the movement or progress of.",
        threatEmoji: "🏊"
    },
    {
        contextPart1: "To escape the burning castle, the rogue opened a hidden wooden ",
        contextPart2: " in the floorboards.",
        options: ["Egg", "Hatch", "Door"], correctWord: "Hatch",
        coreMeaning: "(Of an egg) to open and produce a young animal.",
        hiddenMeaning: "A small opening in a floor, wall, or roof, especially one allowing access.",
        threatEmoji: "🚪"
    },
    {
        contextPart1: "The terrified guards watched the massive stone golem ",
        contextPart2: " toward the city gates.",
        options: ["Wood", "Lumber", "Stomp"], correctWord: "Lumber",
        coreMeaning: "Timber sawn into rough planks or otherwise partly prepared.",
        hiddenMeaning: "To move in a slow, heavy, awkward way.",
        threatEmoji: "🗿"
    },
    {
        contextPart1: "The giant used his massive fists to ",
        contextPart2: " the knight's shield until it broke into pieces.",
        options: ["Weight", "Pound", "Smash"], correctWord: "Pound",
        coreMeaning: "A unit of weight equal to 16 ounces.",
        hiddenMeaning: "To strike or hit heavily and repeatedly.",
        threatEmoji: "🤛"
    },
    {
        contextPart1: "The skilled bounty hunter finally tracked his escaping ",
        contextPart2: " into the dark woods.",
        options: ["Mine", "Quarry", "Prey"], correctWord: "Quarry",
        coreMeaning: "A place, typically a large, deep pit, from which stone or other materials are or have been extracted.",
        hiddenMeaning: "An animal pursued by a hunter, hound, predatory mammal, or bird of prey.",
        threatEmoji: "🎯"
    },
    {
        contextPart1: "The peasants threw all their rotting food and ",
        contextPart2: " into the ditch outside the castle walls.",
        options: ["Deny", "Refuse", "Trash"], correctWord: "Refuse",
        coreMeaning: "To indicate or show that one is not willing to do something.",
        hiddenMeaning: "Matter thrown away or rejected as worthless; trash. (Pronounced 'ref-yoos')",
        threatEmoji: "🗑️"
    },
    {
        contextPart1: "The surprise attack resulted in a total ",
        contextPart2: " of the enemy goblin army.",
        options: ["Path", "Rout", "Defeat"], correctWord: "Rout",
        coreMeaning: "A sequence of performances or tasks (like a routine) OR a path (Route).",
        hiddenMeaning: "A disorderly retreat of defeated troops; a decisive defeat.",
        threatEmoji: "🏃‍♂️"
    },
    {
        contextPart1: "The assassin used his pinched fingers to ",
        contextPart2: " out the candle, plunging the room into darkness.",
        options: ["Tobacco", "Snuff", "Kill"], correctWord: "Snuff",
        coreMeaning: "Powdered tobacco that is sniffed up the nostril.",
        hiddenMeaning: "To extinguish (a candle).",
        threatEmoji: "🕯️"
    },
    {
        contextPart1: "The giant stepped forward to completely ",
        contextPart2: " the tiny poisoned spider under his boot.",
        options: ["Veggie", "Squash", "Crush"], correctWord: "Squash",
        coreMeaning: "An edible gourd, the flesh of which may be baked or boiled.",
        hiddenMeaning: "To crush or squeeze (something) with force so that it becomes flat, soft, or out of shape.",
        threatEmoji: "🥾"
    },
    {
        contextPart1: "The herbalist told the hero to ",
        contextPart2: " the magical healing leaves in boiling water for ten minutes.",
        options: ["High", "Steep", "Soak"], correctWord: "Steep",
        coreMeaning: "(Of a slope, flight of stairs, or angle) rising or falling sharply; almost perpendicular.",
        hiddenMeaning: "To soak (food or tea) in water or other liquid so as to extract its flavor or to soften it.",
        threatEmoji: "🍵"
    },
    {
        contextPart1: "The tavern keeper served a very ",
        contextPart2: " green apple that made the knight's mouth pucker.",
        options: ["Cake", "Tart", "Sour"], correctWord: "Tart",
        coreMeaning: "An open pastry case containing a filling.",
        hiddenMeaning: "Sharp or acid in taste.",
        threatEmoji: "🍏"
    },
    {
        contextPart1: "To activate the mechanical golem, you must ",
        contextPart2: " the rusty gear on its back very tightly.",
        options: ["Air", "Wind", "Twist"], correctWord: "Wind",
        coreMeaning: "The perceptible natural movement of the air.",
        hiddenMeaning: "To turn or twist (something) repeatedly around a center. (Pronounced 'waind')",
        threatEmoji: "⚙️"
    },
    {
        contextPart1: "The tailor measured exactly three ",
        contextPart2: " of silk cloth to make the royal cape.",
        options: ["Lawn", "Yard", "Meter"], correctWord: "Yard",
        coreMeaning: "A piece of enclosed ground adjoining a building; a garden.",
        hiddenMeaning: "A unit of linear measure equal to 3 feet (0.9144 meter).",
        threatEmoji: "📏"
    },
    {
        contextPart1: "The arrogant noble's loud, complaining voice began to ",
        contextPart2: " on the exhausted soldiers' nerves.",
        options: ["Metal", "Grate", "Annoy"], correctWord: "Grate",
        coreMeaning: "A framework of metal bars used as a partition or a frame for a fire.",
        hiddenMeaning: "To have an irritating effect.",
        threatEmoji: "😖"
    },
    {
        contextPart1: "The greedy traitor was motivated purely by ",
        contextPart2: " and vile desires for gold.",
        options: ["Low", "Vile", "Base"], correctWord: "Base",
        coreMeaning: "The lowest part or edge of something, especially the part on which it rests.",
        hiddenMeaning: "Without moral principles; ignoble.",
        threatEmoji: "👿"
    },
    {
        contextPart1: "The invading barbarian army marched directly toward the enemy's ",
        contextPart2: " city.",
        options: ["Main", "Chief", "Capital"], correctWord: "Capital",
        coreMeaning: "Wealth in the form of money or other assets owned by a person or organization.",
        hiddenMeaning: "The most important city or town of a country or region, usually its seat of government.",
        threatEmoji: "🏰"
    },
    {
        contextPart1: "The sinister vampire lord held the noble title of ",
        contextPart2: " in his dark homeland.",
        options: ["Duke", "Lord", "Count"], correctWord: "Count",
        coreMeaning: "Determine the total number of (a collection of items).",
        hiddenMeaning: "A foreign nobleman whose rank corresponds to that of an earl.",
        threatEmoji: "🧛"
    },
    {
        contextPart1: "The wealthy merchant calculated his ",
        contextPart2: " profit before paying taxes to the king.",
        options: ["Total", "Whole", "Gross"], correctWord: "Gross",
        coreMeaning: "Unattractively large or bloated; very disgusting.",
        hiddenMeaning: "(Of income, profit, or interest) without deduction of tax or other contributions; total.",
        threatEmoji: "💰"
    },
    {
        contextPart1: "The exhausted soldier asked his commander for ",
        contextPart2: " to return home and visit his sick mother.",
        options: ["Time", "Pass", "Leave"], correctWord: "Leave",
        coreMeaning: "To go away from.",
        hiddenMeaning: "Time when one has permission to be absent from work or duty.",
        threatEmoji: "📜"
    },
    {
        contextPart1: "The cruel dragon would always ",
        contextPart2: " a heavy tribute of gold from the conquered lands.",
        options: ["Demand", "Force", "Exact"], correctWord: "Exact",
        coreMeaning: "Not approximated in any way; precise.",
        hiddenMeaning: "Demand and obtain (something, especially a payment) from someone.",
        threatEmoji: "🐉"
    },
    {
        contextPart1: "After marching without food for three days, the army's energy began to ",
        contextPart2: " noticeably.",
        options: ["Drop", "Fade", "Flag"], correctWord: "Flag",
        coreMeaning: "A piece of cloth with a special design that is used as a symbol of a nation.",
        hiddenMeaning: "To become tired, weaker, or less enthusiastic.",
        threatEmoji: "🏳️"
    },
    {
        contextPart1: "Taking on too much water, the damaged pirate ship began to ",
        contextPart2: " dangerously to the port side.",
        options: ["Tilt", "Lean", "List"], correctWord: "List",
        coreMeaning: "A number of connected items or names written or printed consecutively.",
        hiddenMeaning: "(Of a ship) to lean to one side, typically because of a leak or unbalanced cargo.",
        threatEmoji: "⛵"
    },
    {
        contextPart1: "According to ancient law, the accused duke could only be judged by a jury of his royal ",
        contextPart2: " .",
        options: ["Equals", "Lords", "Peer"], correctWord: "Peer",
        coreMeaning: "Look keenly or with difficulty at someone or something.",
        hiddenMeaning: "A member of the nobility in Britain or Ireland, comprising the ranks of duke, marquess, earl, viscount, and baron.",
        threatEmoji: "👑"
    },
    {
        contextPart1: "The dragon's sharp claw caused a massive ",
        contextPart2: " in the knight's metal shield.",
        options: ["Tear", "Hole", "Rent"], correctWord: "Rent",
        coreMeaning: "A tenant's regular payment to a landlord for the use of property or land.",
        hiddenMeaning: "A large tear in a piece of fabric or material.",
        threatEmoji: "🛡️"
    },
    {
        contextPart1: "The sudden strike from the monster's tail caused his arm to ",
        contextPart2: " with intense pain.",
        options: ["Burn", "Hurt", "Smart"], correctWord: "Smart",
        coreMeaning: "Having or showing a quick-witted intelligence.",
        hiddenMeaning: "To feel a sharp, stinging pain.",
        threatEmoji: "💥"
    },
    {
        contextPart1: "The werewolf's physical power grew significantly as the full moon began to ",
        contextPart2: " in the sky.",
        options: ["Grow", "Rise", "Wax"], correctWord: "Wax",
        coreMeaning: "A sticky yellowish moldable substance secreted by honeybees.",
        hiddenMeaning: "(Of the moon between new and full) have a progressively larger part of its visible surface illuminated.",
        threatEmoji: "🌕"
    },
    {
        contextPart1: "The harsh general knew he had to ",
        contextPart2: " out the cowardly soldiers from his elite ranks.",
        options: ["Remove", "Pull", "Weed"], correctWord: "Weed",
        coreMeaning: "A wild plant growing where it is not wanted and in competition with cultivated plants.",
        hiddenMeaning: "To remove unwanted items or members from a group.",
        threatEmoji: "🌿"
    },
    {
        contextPart1: "The royal guards marched quietly through the narrow mountain pass in single ",
        contextPart2: " .",
        options: ["Line", "Row", "File"], correctWord: "File",
        coreMeaning: "A folder or box for holding loose papers.",
        hiddenMeaning: "A line of people or things one behind another.",
        threatEmoji: "🚶‍♂️"
    },
    {
        contextPart1: "The royal gardener measured a perfect square ",
        contextPart2: " of land to plant the highly valuable magic herbs.",
        options: ["Area", "Patch", "Plot"], correctWord: "Plot",
        coreMeaning: "A secret plan made by a group of people to do something illegal or harmful.",
        hiddenMeaning: "A small piece of ground marked out for a purpose such as building or gardening.",
        threatEmoji: "🌱"
    }
];