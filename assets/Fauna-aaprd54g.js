import{_ as me}from"./PageCreator.vue_vue_type_script_setup_true_lang-BAC2Y4j6.js";import{d as k,u as ie,s as te,c as R,o as v,a as ee,b as o,e as U,t as n,f as e,h as s,k as g,g as G,F as ue,q as K,v as Q,x as Y,r as le,B as ne,j as y,E as Z,y as J,I as X,l as d,_ as h,G as ce}from"./main-BvFVr8le.js";import{c as pe,_ as ge,a as be,S as ve,b as he}from"./FileUploadNotice.vue_vue_type_script_setup_true_lang-CiCntD6U.js";import{_ as se}from"./WikiTemplate.vue_vue_type_script_setup_true_lang-BbGbBLBS.js";import{T as fe}from"./TextareaInput-CsWALHYi.js";import{_ as ye}from"./GameModeSelect.vue_vue_type_script_setup_true_lang-BfeOqs5N.js";import{c as re,_ as Fe,a as Ce,b as Ve,d as xe}from"./ActivitySelect.vue_vue_type_script_setup_true_lang-D-599-Ii.js";const Se={class:"keep-linebreaks"},Ee={key:0,class:"keep-linebreaks"},Ae={class:"keep-linebreaks"},we={key:1},ke=k({__name:"faunaOutput",setup(a){const l=ie(),{name:r,release:i,image:t,discovered:d,discoveredlink:u,researchteam2:c,system:m,planet:p,moon:b,glyphs:h,mode:y,regionData:F,orgName:f,appearance:C,genus:V,hemisphere:x,rarity:S,ecosystem:E,activity:A,gender2:w,behaviour:k,gender:N,height:P,height2:D,weight:B,weight2:M,diet:H,produces:_,notes:z,docBy:T,docBySentence:j}=te(l),q=R((()=>N.value&&w.value&&N.value!==w.value?`${N.value} - ${w.value}`:N.value||w.value||"")),I=R((()=>B.value&&M.value&&B.value!==M.value?`${B.value} - ${M.value}`:B.value||M.value||"")),O=R((()=>P.value&&D.value&&P.value!==D.value?`${P.value} - ${D.value}`:P.value||D.value||""));return(a,l)=>(v(),ee(ue,null,[o("div",null,[l[0]||(l[0]=o("span",null,"{{Version|",-1)),U(n(e(i)),1),l[1]||(l[1]=o("span",null,"}}",-1))]),l[3]||(l[3]=o("div",null,"{{Fauna infobox",-1)),o("div",null,"| name = "+n(e(r)),1),o("div",null,"| image = "+n(e(t)||"nmsMisc_NotAvailable.png"),1),o("div",null,"| galaxy = "+n(e(F).galaxy),1),o("div",null,"| region = "+n(e(F).region),1),o("div",null,"| system = "+n(e(m)),1),o("div",null,"| planet = "+n(e(p)),1),o("div",null,"| moon = "+n(e(b)),1),o("div",null,[l[2]||(l[2]=U("| coordinates = ")),s(se,{"template-name":"Glyphs2Coords"},{default:g((()=>[U(n(e(h)),1)])),_:1})]),o("div",null,"| hemisphere = "+n(e(x)),1),o("div",null,"| rarity = "+n(e(S)),1),o("div",null,"| ecosystem = "+n(e(E)),1),o("div",null,"| activity = "+n(e(A)),1),o("div",null,"| gender = "+n(q.value),1),o("div",null,"| behaviour = "+n(e(k)),1),o("div",null,"| diet = "+n(e(H)),1),o("div",null,"| weight = "+n(I.value),1),o("div",null,"| height = "+n(O.value),1),o("div",null,"| notes = "+n(e(z)),1),o("div",null,"| produces = "+n(e(_)),1),o("div",null,"| genus = "+n(e(V)),1),o("div",null,"| civilized = "+n(e(pe)),1),o("div",null,"| discovered = "+n(e(d)),1),o("div",null,"| discoveredlink = "+n(e(u)),1),o("div",null,"| mode = "+n(e(y)),1),o("div",null,"| researchteam = "+n(e(c)),1),o("div",null,"| release = "+n(e(i)),1),l[4]||(l[4]=o("div",null,"}}",-1)),o("div",null,"'''"+n(e(r))+"''' is a species of fauna.",1),l[5]||(l[5]=o("br",null,null,-1)),l[6]||(l[6]=o("div",null,"==Summary==",-1)),o("div",null,"'''"+n(e(r))+"''' is a [[creature]], a member of the "+n(e(V))+" [[genus]].",1),l[7]||(l[7]=o("br",null,null,-1)),l[8]||(l[8]=o("div",null,"==Appearance==",-1)),o("div",Se,n(e(C)),1),l[9]||(l[9]=o("br",null,null,-1)),l[10]||(l[10]=o("div",null,"==Discovery Menu==",-1)),o("div",null,"'''Additional Observations''': "+n(e(z)),1),l[11]||(l[11]=o("br",null,null,-1)),l[12]||(l[12]=o("div",null,"==Alias Names==",-1)),e(f)?(v(),ee("div",Ee,[s(se,{"template-name":"aliasc"},{default:g((()=>[U("text=Original|name="+n(e(f)),1)])),_:1})])):G("",!0),o("div",Ae,[s(se,{"template-name":"aliasc"},{default:g((()=>[U("text=Current|name="+n(e(r)),1)])),_:1})]),l[13]||(l[13]=o("br",null,null,-1)),l[14]||(l[14]=o("div",null,"==Additional Information==",-1)),e(T)&&e(T)!==e(u)&&e(T)!==e(d)?(v(),ee("div",we,"Documented by "+n(e(j)),1)):G("",!0),l[15]||(l[15]=o("br",null,null,-1)),l[16]||(l[16]=o("div",null,"==Gallery==",-1)),s(ge)],64))}}),Ne={class:"is-flex is-justify-content-space-between is-align-items-center full-width"},De=["id"],Pe=k({__name:"GenusSelect",props:K({resetEvent:{}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(a){const l=Q(a,"modelValue"),n=Y("genus"),r=ie(),{ecosystem:i}=te(r),t=le([]),d=le(""),u=le([]);function c(){const e=i.value;t.value=Object.keys(re.ecosystems[e]||{})}ne(i,c),ne(d,(e=>{var a;e&&i.value&&(u.value=(null==(a=re.ecosystems[i.value][e])?void 0:a.produces)||[])}));const m=R((()=>t.value.map((e=>({label:e,value:e})))));return c(),(a,r)=>(v(),y(X,null,{label:g((()=>[o("div",Ne,[o("label",{id:e(n)},"Género:",8,De),s(Z,{tooltip:"Encontrado en el menú de descubrimiento de criaturas."})])])),input:g((()=>[s(J,{modelValue:l.value,"onUpdate:modelValue":r[0]||(r[0]=e=>l.value=e),"aria-labelledby":e(n),options:m.value,"reset-event":a.resetEvent},null,8,["modelValue","aria-labelledby","options","reset-event"])])),_:1}))}}),Me=["","Asynchronous","Circular","Electronic","Mutable","Non-boolean","Non-Euclidean","Uninitialised","Unmeasurable","Virtual","Alpha","Asymmetric","Asymptotic","Exotic","Female","Non-uniform","None","Orthogonal","Prime","Radical","Rational","Symmetric","Unknown","Vectorised"],Be=["","Asíncrono","Circular","Electrónico","Mutable","No booleano","No euclidiano","No inicializado","Inmensurable","Virtual","Alfa","Asimétrico","Asintótico","Exótico","Hembra","No uniforme","Ninguno","Ortogonal","Principal","Radical","Racional","Simétrico","Desconocido","Vectorizado"],He=Be.map(((e,a)=>({label:e,value:Me[a]}))),Re={class:"is-flex is-justify-content-space-between is-align-items-center full-width"},Te=["id"],de=k({__name:"GenderSelect",props:K({resetEvent:{},label:{}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(a){const l=Q(a,"modelValue"),r=Y("gender1");return(a,i)=>(v(),y(X,null,{label:g((()=>[o("div",Re,[o("label",{id:e(r)},n(a.label),9,Te),s(Z,{tooltip:"Encontrado en el menú de descubrimiento de criaturas."})])])),input:g((()=>[s(J,{modelValue:l.value,"onUpdate:modelValue":i[0]||(i[0]=e=>l.value=e),"aria-labelledby":e(r),options:e(He),"reset-event":a.resetEvent},null,8,["modelValue","aria-labelledby","options","reset-event"])])),_:1}))}}),ze={"01100001 01101110 01100111 01110010 01111001":"01100001 01101110 01100111 01110010 01111001","01110011 01100001 01100100":"01110011 01100001 01100100","01100001 01101100 01101111 01101110 01100101":"01100001 01101100 01101111 01101110 01100101","01101000 01100101 01101100 01110000":"01101000 01100101 01101100 01110000","01110111 01100001 01101001 01110100":"01110111 01100001 01101001 01110100","01101000 01110101 01101110 01110100":"01101000 01110101 01101110 01110100","01101011 01101001 01101100 01101100":"01101011 01101001 01101100 01101100","01100110 01100001 01101001 01101100":"01100110 01100001 01101001 01101100","01100110 01110010 01101001 01100101 01101110 01100100":"01100110 01110010 01101001 01100101 01101110 01100100",Sedate:"Tranquilo",Erratic:"Errático",Active:"Activo",Distinctive:"Distintivo",Hibernator:"Hibernador",Unintelligent:"Limitado","Careful hunter":"Cazador cuidadoso","Patient hunter":"Cazador paciente",Cautious:"Cauto",Impulsive:"Impulsivo",Reckless:"Temerario",Aggressive:"Agresivo",Unafraid:"Impávido","Cold-blooded":"Sangre fría","Does not fear death":"No teme a la muerte",Intelligent:"Inteligente",Calm:"Calmado","Enjoys the hunt":"Disfruta de la caza",Bold:"Atrevido","Stalks prey for days":"Acecha a su presa durante días",Unpredictable:"Impredecible",Dangerous:"Peligroso","Wildly aggressive":"Muy agresivo",Vicious:"Despiadado",Cruel:"Cruel",Hyperviolent:"Hiperviolento","Excited by violence":"Le encanta la violencia",Angry:"Irritado","Easily enraged":"Fácil de enfurecer",Warlike:"Beligerante","Apex predator":"Superdepredador",Watchful:"Vigilante",Nervous:"Nerviosa",Skittish:"Asustadiza",Timid:"Huidiza",Shy:"Tímida","Highly observant":"Muy observadora","Slow grazer":"Pastadora lenta","Tends plants":"Cuida las plantas","Seeks company":"Busca compañía",Wary:"Recelosa","Easily startled":"Fácil de asustar",Vigilant:"Vigilante",Inattentive:"Distraída","Constantly moving":"En constante movimiento",Hasty:"Veloz",Fidgety:"Inquieta",Anxious:"Ansiosa","Long-distance migration":"Migradora de larga distancia",Nomadic:"Nómada","Remembers faces":"Recuerda las caras",Submissive:"Sumisa","Highly intelligent":"Muy inteligente",Passive:"Pasiva",Docile:"Dócil",Wise:"Sabia",Prudent:"Prudente","Far-sighted":"Sagaz","Always foraging":"Siempre en busca de alimento",Methodical:"Metódica",Friendly:"Amistosa",Cheerful:"Animada",Gentle:"Moderada",Peaceful:"Pacífica",Flighty:"Voluble","Collects shiny objects":"Recoge objetos brillantes","Builds large nests":"Construye grandes nidos","Easily scared":"Fácil de asustar",Migratory:"Migratoria","Very cautious":"Muy observadora","Sings at dusk":"Canta al anochecer","Long-sighted":"Previsora","Ever-moving":"Siempre en movimiento",Instinctive:"Instintivo",Desperate:"Desesperado","Food-seeking":"En busca de alimento","Mate-seeking":"En busca de apareamiento","Never sleeps":"Nunca duerme",Melancholy:"Melancólico",Lonely:"Solitario",Observant:"Observador","Drifts on currents":"Se deja llevar por las corrientes","Deep-diving":"Nada en las profundidades","Seeks cold":"Busca el frío","Seeks warmth":"Busca el calor","Bioelectric Defenses":"Defensas bioeléctricas","Can inflate quickly":"Puede hincharse con rapidez",Lost:"Perdido","Haunted by unheard sound":"Perseguido por un sonido inaudible","Uses sonar":"Usa sonar","Effectively blind":"Eficazmente ciego","Pressure sensitive":"Sensible a la presión",Photophobic:"Fotofóbico","Only sees up":"Solo mira hacia arriba",Chromatophoric:"Cromatofórico","Forms schools":"Forma bancos","Frequent shoaling":"Suele formar bancos","Smells blood":"Huele la sangre","Silent stalker":"Acechador silencioso",Hostile:"Hostil","Ambush predation":"Depredación con emboscadas","Shoots neurotoxic spines":"Dispara espinas neurotóxicas","Strikes from below":"Ataca desde abajo","Pack hunter":"Caza en manada","Lone predator":"Depredador solitario",Threatening:"Amenazante",Transcendent:"Extraordinaria","Self-aware":"Consciente de sí misma",Hungry:"Hambrienta",Afraid:"Temerosa"},Ue=Object.entries(ze).map((([e,a])=>({label:a,value:e}))),Ge={class:"is-flex is-justify-content-space-between is-align-items-center full-width"},qe=k({__name:"BehavioursSelect",props:K({resetEvent:{}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(a){const l=Q(a,"modelValue"),n=Y("behaviour");return(a,r)=>(v(),y(X,null,{label:g((()=>[o("div",Ge,[r[1]||(r[1]=o("label",null,"Comportamiento:",-1)),s(Z,{tooltip:"Encontrado en el escaneo de criaturas."})])])),input:g((()=>[s(J,{modelValue:l.value,"onUpdate:modelValue":r[0]||(r[0]=e=>l.value=e),"aria-labelledby":e(n),options:e(Ue),"reset-event":a.resetEvent},null,8,["modelValue","aria-labelledby","options","reset-event"])])),_:1}))}}),Ie={"[[Star Bramble]]":"Zarza estelar","[[Echinocactus]]":"Equinocactus","[[Solar Vine]]":"Vid solar","[[Frostwort]]":"Heliantemo","[[Fungal Cluster]]":"Grupo fúngico","[[Gamma Weed]]":"Hierba gamma","[[Mordite Root]]":"Raíz de mordita","Nitrous Oxide":"Óxido nitroso","[[Cadmium]]":"Cadmio","[[Emeril]]":"Emerilio","[[Indium]]":"Indio","[[Kelp Sac]]":"Saco de algas marinas","[[Condensed Carbon]]":"Carbono condensado",Vegetation:"Vegetación",Foliage:"Follaje","Small trees":"Árboles pequeños","Rotting fruit":"Fruta podrida","Fresh leaves":"Hojas frescas","Plant roots":"Plantas de raíz","Digs for tubers":"Excava en busca de tubérculos",Grass:"Hierba","Foraged nuts":"Busca frutos secos","Collects seeds":"Recoge semillas","Nibbles at shoots":"Mordisquea brotes","Tall grasses":"Hierbas altas","[[Cave Marrow|Cave marrow]]":"Médula de cueva","[[Mordite Root|Mordite roots]]":"Raíces de mordita","[[Faecium]]":"Hecesio","[[Coprite]]":"Coprita","Well-Matured Dung":"Heces maduras","Mostly rocks":"En su mayoría rocas","[[Di-hydrogen]] crystals":"Cristales de dihidrógeno","Processes dirt":"Procesa la suciedad","Oxide elements":"Elementos de óxido","Absorbed nutrients":"Absorción de nutrientes","[[NipNip Buds|NipNip buds]]":"Brotes de NipNip","[[Gravitino Ball|Gravitino balls]]":"Bolas de gravitino","Stinging leaves":"Hojas punzantes",Algae:"Algas",Flowers:"Flores",Petals:"Pétalos",Nectar:"Néctar",Pollen:"Polen","Scavenged scraps":"Sobras carroñadas","Insects and grubs":"Insectos y larvas",Worms:"Gusanos",Anything:"Cualquier cosa","[[Faecium|Faeces]]":"Heces",Birds:"Aves","Scavenged remains":"Restos carroñados","Partially-digested meat":"Carne parcialmente digerida",Eggs:"Huevos","Steals from others":"Roba a otros","[[Venom Urchin]]s":"Erizos de mar venenosos","Foraged leftovers":"Restos rebuscados","Small animals":"Animales pequeños","Old bones":"Huesos viejos","[[Mordite]]":"Mordita",Carnivorous:"Carnívoro","Meat-eater":"Carnívoro","Hypnotises prey":"Hipnotiza a sus presas","Crunches bones":"Tritura huesos","Blood-drinker":"Bebedor de sangre","Liquidised organs":"Órganos licuados","Extracts bone marrow":"Extrae la médula ósea",Organs:"Órganos","Raw meat":"Carne cruda","Flesh-eater":"Carnívoro",Hypercarnivore:"Hipercarnívoro","Brain matter":"Materia gris",Sinew:"Tendón","Fresh meat":"Carne fresca",Corpses:"Cadáveres","Putrefied meat":"Carne putrefacta",Cannibal:"Caníbal",Offal:"Vísceras","Removed hearts":"Corazones extraídos","Other carnivores":"Otros carnívoros","Large mammals":"Mamíferos grandes","Flesh chunks":"Trozos de piel","Meat chunks":"Trozos de carne","Coagulated blood":"Sangre coagulada","Frozen meat":"Carne congelada","Boiled meat":"Carne cocida","Radioactive meat":"Carne radiactiva","Toxic meat":"Carne tóxica","Rotten meat":"Carne podrida","Preserved meat":"Carne preservada","Fetid meat":"Carne fétida","Charred meat":"Carne carbonizada","Marine snow":"Nieve marina",Chemosynthesis:"Quimiosíntesis","Vented minerals":"Minerales agujereados",Plankton:"Plancton",Seaweed:"Algas marinas","Deepwater algae":"Algas de aguas profundas","Small crustaceans":"Pequeños crustáceos","Rotten wood":"Madera podrida","Decayed plant life":"Vegetación descompuesta","Marine detritus":"Detritus marinos","Algal particulates":"Partículas de algas",Coral:"Coral","Living sponges":"Esponjas vivas","Deepwater spores":"Esporas de aguas profundas","Nibbles at moss":"Mordisquea musgo","Hydrothermal minerals":"Minerales hidrotermales","Water filtration":"Filtración de agua","Drifting plants":"Plantas a la deriva",Silicates:"Silicatos","High in calcium":"Alto contenido en calcio","Water vines":"Vides de agua","[[Kelp Sac|Kelp sacs]]":"Sacos de algas marinas","Nutritious water weeds":"Hierbas de agua nutritivas","Other fish":"Otros peces",Cannibalism:"Canibalismo","Marine eggs":"Huevos marinos",Turtles:"Tortugas",Shellfish:"Moluscos","Drifting carcasses":"Cadáveres a la deriva",Bones:"Huesos","Hunts squid":"Caza calamares","Brined organs":"Órganos salados","Salinated flesh":"Carne salinizada",Brains:"Cerebro",Blood:"Sangre","Gelatinous chunks":"Trozos gelatinosos",Wasteflesh:"Carne de desecho","Pure Silicon":"Silicio puro","Siphoned Data":"Datos absorbidos","[[Nanite Cluster]]s":"Cúmulos de nanites","Recycled Heat":"Calor reciclado","Cosmic Rays":"Rayos cósmicos","Decaying Atoms":"Átomos deteriorados",Random:"Aleatoria",Interlopers:"Intrusos"},je=Object.entries(Ie).map((([e,a])=>({label:a,value:e}))),Oe={class:"is-flex is-justify-content-space-between is-align-items-center full-width"},$e=k({__name:"DietSelect",props:K({resetEvent:{}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(a){const l=Q(a,"modelValue"),n=Y("diet");return(a,r)=>(v(),y(X,null,{label:g((()=>[o("div",Oe,[r[1]||(r[1]=o("label",null,"Dieta:",-1)),s(Z,{tooltip:"Encontrado en el escaneo de criaturas."})])])),input:g((()=>[s(J,{modelValue:l.value,"onUpdate:modelValue":r[0]||(r[0]=e=>l.value=e),"aria-labelledby":e(n),options:e(je),"reset-event":a.resetEvent},null,8,["modelValue","aria-labelledby","options","reset-event"])])),_:1}))}}),Le={"Organic Interior":"Interior orgánico","Magnetic Shell":"Caparazón magnético","Self-Greasing":"Autolubricante","Searching for home":"Buscando su hogar","Wonders why":"Se hace preguntas","Waiting for infinity":"Esperando al infinito","Transmitting to the Atlas":"Transmitiendo al Atlas","Remembers the Before":"Recuerda el ayer","Non-simulated":"No simulado","Solar Powered":"Consume energía solar","[ Internal battery leak detected ]":"[Fuga detectada en la batería interna]",Unscannable:"No se le puede escanear",Recycled:"Reciclado","Self-constructed":"Autoconstruido","Assembled in the stars":"Ensamblado en las estrellas","Superconducting wires":"Cables superconductores","Enlarged flux circuit":"Circuito de flujo alargado","Distributed cores":"Núcleos distribuidos",Divergent:"Divergente","Self-aware":"Consciente de sí mismo","Chooses not to speak":"Decide no hablar",Underclocked:"Rendimiento reducido",Overclocked:"Rendimiento aumentado","Air-cooled":"Refrigerado por aire","Graphene wiring":"Cableado de grafeno","Many hidden toes":"Muchos dedos ocultos","Builds metal nest":"Construye nidos metálicos","Dislikes bright colours":"No le gustan los colores brillantes","Moon Baby":"Nocturna","Lays beautiful eggs":"Pone huevos preciosos","Waxy all-over":"Tinen cera por todas partes","Secretes venom":"Segrega veneno","Compound eyes":"Ojos compuestos","Inverted organ sacs":"Cavidad de órganos invertida","Good pollinator":"Buena polinizadora","Ultrasonic roar":"Rugido ultrasónico","Retractable appendages":"Apéndices retráctiles","Has no bones":"No tiene huesos","Not carbon based":"No se basa en carbono",Evil:"Malvada","Nutritious faeces":"Heces nutritivas","Asexual reproduction":"Reproducción asexual","Changes gender when cold":"Cambia de género cuando hace frío","Can dislocate jawbones":"Puede dislocar maxilares","Powerful mandibles":"Mandíbulas potentes","Autonomous regeneration":"Regeneración autónoma","Technically immortal":"Técnicamente inmortal","Blue blood":"Sangre azul","Green blood":"Sangre verde","Yellow blood":"Sangre amarilla","Excess of bile":"Exceso de bilis","Creates beautiful webs":"Crea hermosas telarañas","Strong burrower":"Gran excavadora",Hibernates:"Hiberna","Mates for life":"Se aparea de por vida","Carries symbiotic fungus":"Porta hongos simbióticos","Stomach inside skull":"Tiene el estómago dentro del cráneo","Nine additional senses":"Nueve sentidos adicionales","Sense organs in feet":"Órganos de los sentidos en los pies","Excellent sense of smell":"Excelente sentido del olfato","Poor hearing":"Mal oído",Ticklish:"Picajosa","Highly intelligent":"Muy inteligente","Cannot see colour":"No puede ver colores","Sprays ink when scared":"Expulsa tinta cuando se asusta","Produces vile stench":"Produce un hedor nauseabundo","Unpleasant to eat":"Desagradable para el consumo","Gelatinous bones":"Huesos gelatinosos","Can change colour":"Puede cambiar de color",Chromatophore:"Cromatóforos","Rapid self-healing":"Autocuración rápida","Valuable blood":"Sangre valiosa","Absorbs moisture from air":"Absorbe humedad del aire","Mildly radioactive":"Ligeramente radiactiva","Strongly radioactive":"Altamente radiactiva","Hybrid species":"Especie híbrida","Genetically unstable":"Genéticamente inestable","Partially domesticated":"Parcialmente domesticada","Gentle soul":"Amable","Hidden extra skull":"Cráneo adicional oculto","Secondary skin":"Piel secundaria","Hidden extra tongue":"Lengua adicional oculta","Redundant internal organs":"Órganos internos redundantes","Rigid bones":"Huesos rígidos","Hidden extra claws":"Garras adicionales ocultas","Six stomachs":"Seis estómagos","Powerful digestive enzymes":"Potentes enzimas digestivas","Saliva pH 14":"Saliva de pH 14","Flexible joints":"Articulaciones flexibles","Hidden stinger":"Aguijón oculto","Covered in tiny hairs":"Cubierta de diminutos pelos",Untameable:"Indomesticable","Fragile skull":"Cráneo frágil","Fragile skin":"Piel frágil","Detachable tongue":"Lengua extraíble","Bruisable organs":"Órganos expuestos","Brittle bones":"Huesos quebradizos","Calcified claws":"Garras calcificadas","Translucent teeth":"Dientes translúcidos","Caustic skin":"Piel cáustica","Toxic tongue":"Lengua tóxica","Covered in toxic bristles":"Cubierta de cerdas tóxicas","Venom-laden claws":"Garras cargadas de veneno","Armoured skull":"Cráneo blindado","Regularly sheds skin":"Muda la piel con regularidad","Monstrous tongue":"Lengua monstruosa","Tiny organs":"Órganos diminutos","Metal bones":"Huesos metálicos","Bioluminescent teeth":"Dientes bioluminiscentes","Thick skull":"Cráneo grueso","Toughened skin":"Piel endurecida","Massive tongue":"Lengua enorme","Stores water in hidden sacs":"Almacena agua en receptáculos ocultos","Sheds and regrows bones":"Muda y regenera los huesos","Sharp claws":"Garras afiladas","Rubber skull":"Cráneo de caucho","Porous skin":"Piel porosa","Regrows teeth each day":"Regenera los dientes cada día","Grows lungs after birth":"Desarrolla pulmones después de nacer","Carbon-based skeleton":"Esqueleto basado en carbono","Decentralised nervous system":"Sistema nervioso descentralizado","Skull full of holes":"Cráneo lleno de agujeros","Skin parasites":"Parásitos en la piel","Tongue parasites":"Parásitos en la lengua","Extensive gut bacteria":"Gran bacteria intestinal","Digests via symbionts":"Digiere a través de simbiontes","Claws harbour disease":"Garras que albergan enfermedades","Spawns in water":"Desova en el agua","Goes underground to die":"Va bajo tierra a morir","Tapeworm host":"Portadora de solitaria",Delicious:"Deliciosa","Easily trained":"Fácil de adiestrar","Inflates when stressed":"Se hincha cuando se estresa","Poor sense of direction":"Mal sentido de la orientación","Excellent navigator":"Navegadora excelente","Can sense magnetic fields":"Puede percibir los campos magnéticos","Easily confused":"Se confunde con facilidad","Frequently lost":"Se pierde con frecuencia","Hears ground vibrations":"Escucha las vibraciones terrestres","Scared of fire":"Tiene miedo al fuego",Hydrophobic:"Hidrofóbica","Vestigial udders":"Ubres vestigiales","Makes art with sticks":"Realiza obras artísticas con palos","Recognises other species":"Reconoce a otras especies","Beloved by the [[Gek]]":"Adorada por los [[Gek]]","Bonds with [[Vy'keen]]":"La unen lazos con los [[Vy'keen]]","Hunts [[Sentinel]]s":"Caza [[Centinelas]]","Matriarchal society":"Sociedad matriarcal","Digs underground nests":"Excava nidos subterráneos","One extendible finger":"Tiene un dedo extensible","Grows wings before death":"Le crecen alas antes de morir","Alluring pheromones":"Feromonas atrayentes","Sings beautifully":"Canta de maravilla","Deceptively fast":"Engañosamente rápida","Lacks gallbladder":"Carece de vesícula biliar","Both gills and lungs":"Tiene branquias y pulmones","Respires inorganically":"Respira de forma inorgánica","Has chlorophyll glands":"Tiene glándulas de clorofila","Sleeps standing up":"Duerme de pie","Never blinks":"Nunca parpadea","Frequently regurgitates":"Regurgita con frecuencia",Irritable:"Irritable","Highly social":"Muy sociable","Dislikes being scanned":"No le gusta que la escaneen",Telepathic:"Telepática","Burns in the sun":"Se quema al sol","Well insulated":"Bien aislada",Photosensitive:"Fotosensible","Secretes phytotoxins":"Segrega fitotoxinas","Lovely eyes":"Ojos preciosos","Good parent":"Buena progenitora","Can feel love":"Puede sentir amor","Screams when upset":"Grita cuando la molestan","Forms colonies":"Forma colonias","Hatched from cocoons":"Nace de capullos",Fragrant:"Aromática","Particularly oily":"Bastante grasienta","Gets cold easily":"Se enfría con facilidad","Drinks blood":"Bebe sangre","Does not age":"No envejece","Always waiting":"Siempre está a la espera","Always watching":"Siempre está vigilante","Aware of its fate":"Es consciente de su destino","Senses ATLAS":"Percibe el ATLAS","Limited sentience":"Conciencia limitada","Born on meteors":"Nace en meteoritos","Laden with nectar":"Cargada de néctar","Occasionally eats rocks":"En ocasiones, consume rocas","Scared of mirrors":"Tiene miedo a los espejos","Eyes regrow after damage":"Regenera los ojos cuando sufren daños","Superheated stomach":"Estómago sobrecalentado","Three hearts":"Tres corazones","Two livers":"Dos hígados","Acidic blood":"Sangre ácida","Respires anaerobically":"Respira de forma anaeróbica","Carries symbiotic worms":"Porta gusanos simbióticos","Riddled with pests":"Llena de parásitos","Carries babies in pouch":"Porta a sus bebés en una bolsa",Promiscuous:"Promiscua","Symmetrical insides":"Entrañas simétricas","Occasionally invisible":"Se hace invisible en ocasiones","Limited mind control":"Control mental limitado","Buries food supplies":"Entierra reservas de comida","Cannot sweat":"No puede sudar","Weak lungs":"Pulmones débiles","Strong swimmer":"Gran nadadora","Made of stardust":"Hecha de polvo estelar","Requires dietary iron":"Necesita hierro dietético","Magnetic teeth":"Dientes magnéticos","Retractable eyestalks":"Globos oculares retráctiles","Breathes through mouth":"Respira a través de la boca","Smells with tongue":"Huele con la lengua","Cannot drown":"No se puede sumergir","Highly fertile":"Muy fértil","Nitrogen-rich blood":"Sangre rica en nitrógeno","Bioluminescent blood":"Sangre bioluminiscente","Fears the rain":"Tiene miedo a la lluvia","Echolocation glands":"Glándulas de ecolocalización","Possesses language":"Posee lenguaje","Varied phenotype":"Fenotipo variado","Tiny brain":"Cerebro diminuto","Cannot digest starch":"No puede digerir el almidón","Seeks red flowers":"Busca flores rojas","Nests in blue foliage":"Anida en follajes azules","Elaborate mating displays":"Realiza rituales de apareamiento","Brain hemispheres not linked":"Hemisferios cerebrales no unidos","Sweats milk for infants":"Suda leche para sus crías","No stomach":"Sin estómago","Double-coned eyes":"Ojos de doble cono","Cutaneous respiration":"Respiración cutánea","Barbed feet":"Pies con púas","Extremely homozygous":"Extremadamente homocigótico","Extremely heterozygous":"Extremadamente heterocigótico","Parasites in brain":"Parásitos en el cerebro","Night vision":"Visión nocturna","But there is something particularly unsettling about this creature, some deep shadow hanging over them. They are to be treated with extreme caution.":"Pero hay algo especialmente perturbador en esta criatura, ...","Skeletal analysis reveals unusually supple bones, as if they had only recently grown: possible defense mechanism to shed and rapidly regrow body parts?":"Análisis óseos han revelado que tiene huesos inusualmente flexibles, como ...","00007FF69A5CF443  cmp  qword ptr [rsi+2E8h],r13":"00007FF69A5CF443  cmp  qpalabra ptr [rsi+2E8h],r13","00007FF69A5CF456  cmp  byte ptr [gbIgnore (07FF69E4BE31Fh)],0":"00007FF69A5CF456 cmp byte ptr [gbIgnorar (07FF69E4BE31Fh)],0","00007FF69A5CF46A  lea  rcx,[string  (07FF69B63A7F4h)]":"00007FF69A5CF46A lea rcx,[cadena (07FF69B63A7F4h)]","00007FF69A5CF497  mov  qword ptr [rsp+40h],rax":"00007FF69A5CF497  mov  qpalabra ptr [rsp+40h],rax","00007FF69A5CF482  movdqu  xmmword ptr [rsp+60h],xmm0":"00007FF69A5CF482  movdqu  xmmpalabra ptr [rsp+60h],xmm0","00007FF69A5CF48F  mov  dword ptr [rsp+48h],92Fh":"00007FF69A5CF48F  mov  dpalabra ptr [rsp+48h],92Fh","00007FF69A5CF4A1  movups  xmm0,xmmword ptr [rsp+38h]":"00007FF69A5CF4A1  movups  xmm0,xmmpalabra ptr [rsp+38h]","00007FF69A5CF4B2  mov  qword ptr [rsp+50h],rax":"00007FF69A5CF4B2  mov  qpalabra ptr [rsp+50h],rax","00007FF69A5CF4B7  lea rdx,[gbIgnore (07FF69E4BE31Fh)]":"00007FF69A5CF4B7  lea rdx,[gbIgnorar (07FF69E4BE31Fh)]","00007FF69A5CF4D6  movups xmm1,xmmword ptr [rsp+68h]":"00007FF69A5CF4D6  movups xmm1,xmmpalabra ptr [rsp+68h]","00007FF712E2305D  movzx  edx,dx":"00007FF712E2305D  movzx  edx,dx","00007FF712E23060  shl  edx,10h":"00007FF712E23060  shl  edx,10h","00007FF712E23063  movzx  cx,r8w":"00007FF712E23063  movzx  cx,r8w","00007FF712E23067  or  edx,ecx":"00007FF712E23067  o  edx,ecx","00007FF712E23069  mov eax,r8d":"00007FF712E23069  mov eax,r8d","00007FF712E2306C  lock   cmpxchg dword ptr [rdi],edx":"00007FF712E2306C  cierre   cmpxchg dpalabra ptr [rdi],edx","00007FF712E22F04  mov  rax,qword ptr [rsi+8]":"00007FF712E22F04  mov  rax,qpalabra ptr [rsi+8]","00007FF712E22F08  mov  rcx,qword ptr [r9+rax+10h]":"00007FF712E22F08  mov  rcx,qpalabra ptr [r9+rax+10h]","00007FF712E22F0D  mov  eax,dword ptr [rcx]":"00007FF712E22F0D  mov  eax,dpalabra ptr [rcx]","00007FF712E22F0F  mov  rcx,qword ptr [rsi+10h]":"00007FF712E22F0F  mov  rcx,qpalabra ptr [rsi+10h]","00007FF712E22F13  test  eax,eax":"00007FF712E22F13  prueba eax,eax"},We=Object.entries(Le).map((([e,a])=>({label:a,value:e}))),_e={class:"is-flex is-justify-content-space-between is-align-items-center full-width"},Ke=k({__name:"NotesSelect",props:K({resetEvent:{}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(a){const l=Q(a,"modelValue"),n=Y("notes");return(a,r)=>(v(),y(X,null,{label:g((()=>[o("div",_e,[r[1]||(r[1]=o("label",null,"Notas:",-1)),s(Z,{tooltip:"Encontrado en el escaneo de criaturas."})])])),input:g((()=>[s(J,{modelValue:l.value,"onUpdate:modelValue":r[0]||(r[0]=e=>l.value=e),"aria-labelledby":e(n),options:e(We),"reset-event":a.resetEvent},null,8,["modelValue","aria-labelledby","options","reset-event"])])),_:1}))}}),Qe=k({__name:"faunaInput",setup(a){const l=ie(),{name:o,discovered:n,discoveredlink:r,image:i,glyphs:t,system:u,planet:c,moon:m,mode:p,researchteam2:b,orgName:F,appearance:f,genus:C,hemisphere:V,rarity:x,ecosystem:S,activity:E,gender2:A,behaviour:w,gender:k,height:N,height2:P,weight:D,weight2:B,diet:M,docBy:H,produces:_,notes:z}=te(l),T=R((()=>""!==A.value&&A.value!==k.value));ne(C,(e=>{var a;e&&S.value&&(_.value=(null==(a=re.ecosystems[S.value][e])?void 0:a.produces)||[])}));const j=R((()=>!n.value)),q=R((()=>!r.value));return(a,l)=>(v(),ee(ue,null,[s(h,{modelValue:e(o),"onUpdate:modelValue":l[0]||(l[0]=e=>d(o)?o.value=e:null),"help-img":"creature/creatureName","help-title":"Nombre de la criatura",label:"Nombre de la criatura:",tooltip:"Introduce exactamente como se ve en el juego. Cuidado con el 0 (cero) y la O (o)."},{default:g((()=>l[27]||(l[27]=[U(" Introduce exactamente como se ve en el juego. Cuidado con el 0 (cero) y la O (o). ")]))),_:1},8,["modelValue"]),s(ve,{modelValue:e(i),"onUpdate:modelValue":l[1]||(l[1]=e=>d(i)?i.value=e:null),label:"Imagen principal","help-title":"Subida de Archivo",tooltip:"La imagen no se subirá a la wiki. Esto es solo para autocompletar el nombre de la imagen."},{default:g((()=>[s(be)])),_:1},8,["modelValue"]),s(h,{modelValue:e(F),"onUpdate:modelValue":l[2]||(l[2]=e=>d(F)?F.value=e:null),label:"Nombre original antes de registrar (si está disponible):"},null,8,["modelValue"]),s(h,{modelValue:e(u),"onUpdate:modelValue":l[3]||(l[3]=e=>d(u)?u.value=e:null),label:"Nombre del sistema:"},null,8,["modelValue"]),s(h,{modelValue:e(c),"onUpdate:modelValue":l[4]||(l[4]=e=>d(c)?c.value=e:null),label:"Nombre del planeta:",tooltip:"Nombre del planeta O el planeta alrededor del cual orbita la luna donde se encuentra la criatura."},null,8,["modelValue"]),s(h,{modelValue:e(m),"onUpdate:modelValue":l[5]||(l[5]=e=>d(m)?m.value=e:null),label:"Nombre de la luna (si la planta está en la luna):",tooltip:"Si la criatura está ubicada en una luna. Déjelo en blanco si la planta está en un planeta."},null,8,["modelValue"]),s(ce,{modelValue:e(t),"onUpdate:modelValue":l[6]||(l[6]=e=>d(t)?t.value=e:null)},null,8,["modelValue"]),s(Fe,{modelValue:e(S),"onUpdate:modelValue":l[7]||(l[7]=e=>d(S)?S.value=e:null)},null,8,["modelValue"]),s(Ce,{modelValue:e(V),"onUpdate:modelValue":l[8]||(l[8]=e=>d(V)?V.value=e:null)},null,8,["modelValue"]),s(Ve,{modelValue:e(x),"onUpdate:modelValue":l[9]||(l[9]=e=>d(x)?x.value=e:null)},null,8,["modelValue"]),s(Pe,{modelValue:e(C),"onUpdate:modelValue":l[10]||(l[10]=e=>d(C)?C.value=e:null)},null,8,["modelValue"]),s(xe,{modelValue:e(E),"onUpdate:modelValue":l[11]||(l[11]=e=>d(E)?E.value=e:null)},null,8,["modelValue"]),s(de,{modelValue:e(k),"onUpdate:modelValue":l[12]||(l[12]=e=>d(k)?k.value=e:null),label:"Género:"},null,8,["modelValue"]),s(de,{modelValue:e(A),"onUpdate:modelValue":l[13]||(l[13]=e=>d(A)?A.value=e:null),label:"Género 2 (si tiene):"},null,8,["modelValue"]),s(qe,{modelValue:e(w),"onUpdate:modelValue":l[14]||(l[14]=e=>d(w)?w.value=e:null)},null,8,["modelValue"]),s($e,{modelValue:e(M),"onUpdate:modelValue":l[15]||(l[15]=e=>d(M)?M.value=e:null)},null,8,["modelValue"]),s(Ke,{modelValue:e(z),"onUpdate:modelValue":l[16]||(l[16]=e=>d(z)?z.value=e:null)},null,8,["modelValue"]),s(h,{modelValue:e(D),"onUpdate:modelValue":l[17]||(l[17]=e=>d(D)?D.value=e:null),label:"Peso en KG:",maxlength:"5",placeholder:"1.5",tooltip:"Encontrado en el escaneo de criaturas. No se necesitan poner 'kg'.","help-img":"creature/creatureWeight","help-title":"Peso de la criatura"},null,8,["modelValue"]),T.value?(v(),y(h,{key:0,modelValue:e(B),"onUpdate:modelValue":l[18]||(l[18]=e=>d(B)?B.value=e:null),label:"Peso del género 2: (si hay)",maxlength:"5",placeholder:"1.5",tooltip:"Encontrado en el escaneo de criaturas. No se necesitan poner 'kg'.","help-img":"creature/creatureWeight","help-title":"Peso de la criatura"},null,8,["modelValue"])):G("",!0),s(h,{modelValue:e(N),"onUpdate:modelValue":l[19]||(l[19]=e=>d(N)?N.value=e:null),label:"Altura en M:",maxlength:"5",placeholder:"1.5",tooltip:"Encontrado en el escaneo de criaturas. No se necesitan poner 'kg'.","help-img":"creature/creatureHeight","help-title":"Altura de la criatura"},null,8,["modelValue"]),T.value?(v(),y(h,{key:1,modelValue:e(P),"onUpdate:modelValue":l[20]||(l[20]=e=>d(P)?P.value=e:null),label:"Altura del género 2: (si hay)",maxlength:"5",placeholder:"1.5",tooltip:"Encontrado en el escaneo de criaturas. No se necesitan poner 'kg'.","help-img":"creature/creatureHeight","help-title":"Altura de la criatura"},null,8,["modelValue"])):G("",!0),j.value?(v(),y(h,{key:2,modelValue:e(r),"onUpdate:modelValue":l[21]||(l[21]=e=>d(r)?r.value=e:null),label:"Nombre en la wiki del descubridor:"},null,8,["modelValue"])):G("",!0),q.value?(v(),y(h,{key:3,modelValue:e(n),"onUpdate:modelValue":l[22]||(l[22]=e=>d(n)?n.value=e:null),label:"Alias del descubridor si no tiene wiki:"},null,8,["modelValue"])):G("",!0),s(ye,{modelValue:e(p),"onUpdate:modelValue":l[23]||(l[23]=e=>d(p)?p.value=e:null)},null,8,["modelValue"]),s(h,{modelValue:e(b),"onUpdate:modelValue":l[24]||(l[24]=e=>d(b)?b.value=e:null),label:"Departamento: (Opcional)"},null,8,["modelValue"]),s(h,{modelValue:e(H),"onUpdate:modelValue":l[25]||(l[25]=e=>d(H)?H.value=e:null),label:"Nombre del documentador si no es el descubridor:"},null,8,["modelValue"]),s(fe,{modelValue:e(f),"onUpdate:modelValue":l[26]||(l[26]=e=>d(f)?f.value=e:null),label:"Apariencia:"},null,8,["modelValue"]),s(he)],64))}}),na=k({__name:"Fauna",setup:e=>(e,a)=>(v(),y(me,null,{input:g((()=>[s(Qe)])),output:g((()=>[s(ke)])),_:1}))});export{na as default};
