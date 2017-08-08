# Generating Flash Cards
In the /source folder, open source.html to see the output. It is printable and eventually will be able to shuffle and flip in browser.

To edit the data contained on those cards, edit the source.js file.

# TODO
  1 - [done] card shuffle option
  2 - mark for review (or remove from deck) option
  3 - title goes inside otherInfo property, so every card object has at most 3 root properties: front, back, otherInfo
  4 - card info explorer so user can view otherInfo property on a card
  5 - deck building layer that makes it easy for a user to filter a custom deck like 'card.title.indexOf('coyne') > -1'
  6 - support arbitrary HTML on card front or back

# On Card Content

approach: preferred minimum of 2 flash cards per unit in each course, more is fine.
'red flag' questions seperated. These are points of disagreement amongst the Professors.

For example, Dr. Wagner is keen on radical uncertainty but Dr. Caplan believes the entailed issues are addressed by standard Search Theory.

Based mainly on my own notes and materials given during class. Some other notes from peers as well.

Syllabi have been made public in this repo but not that other stuff sorry folks not sure I have permission.

Some course notes can be found scouring the internet eg all Caplan's stuff is open on his website: http://econfaculty.gmu.edu/bcaplan/courses.html

Feel free to request help from the good people in the GMU Econ Ph.D. Facebook group if they let you in: https://www.facebook.com/groups/1493090287670821/

Some program data on the fields determining courses at: http://economics.gmu.edu/graduate/policies/qualifying-and-field-exams/field-exams

Notes are programmatically converted from XML to JSON and split into files using convert.js via Node in the parent folder.

Study source.json to see what the input should look like. Basically:
  - The top-level courses object has a value which is an array of course objects.
  - Each course object should have a title, an array of cards, and an optional size parameter which takes only 4 or 8 at the moment, and it defaults to 4 if not specified.
  - Size means how many cards to add onto one printable page.

The output is an HTML applet which right now can be printed to obtain physical flash cards but it will eventually run in the browser as a standalone flash card app as well.

Unit are matched to a title attribute of a <card /> element. An overview is below:


# Courses:

austrian-1-econ-880-coyne

austrian-2-econ-881-wagner

public-choice-1-econ-852-wagner

public-choice-2-econ-854-caplan

public-choice-3-econ-856-leeson


# Units:

austrian-1-econ-880-coyne
  unit 1/13
    1 - note
      - question: Who is considered the founder of the Austrian School, what is a key concept he contributed, and around what time?
      - answer: Carl Menger is considered the founder of the Austrian School. He published Principles in 1871 which contributed to the Marginal Revolution by expressing a subjective theory of value, contrasting with the Classical Labor Theory of Value.
    2 - note
      - question: According to Menger, how does money originate?
      - answer: Money originates on the market as the most marketable commodity. A marketable commodity is one which is easily exchanged or sold.
  unit 2/13
    1 - note
      - question: What are the prerequisites for Human Action?
      - answer: 1) One must conceive of a preferred state of affairs, and 2) One must believe that there are set of specific actions which will feasibly produce a such state of affairs.
    2 - note
      - question: What is Praxeology?
      - answer: The study of human action. Economics, Political Science, and Anthropology, for example, are included. Biology and psychology are excluded. Ends are taken as given and the determination of those ends is the purview of Thymology or Psychology rather than Praxeology.
    3 - note
      - question: What is Catallactics?
      - answer: The praxeological theory of interaction and exchange
  unit 3/13
  unit 4/13
  unit 5/13
  unit 6/13
  unit 7/13
  unit 8/13
  unit 9/13
  unit 10/13
  unit 11/13
  unit 12/13
  unit 13/13

austrian-2-econ-881-wagner
  unit 1/4
  unit 2/4
  unit 3/4
  unit 4/4

public-choice-1-econ-852-wagner
  unit 1/11
  unit 2/11
  unit 3/11
  unit 4/11
  unit 5/11
  unit 6/11
  unit 7/11
  unit 8/11
  unit 9/11
  unit 10/11
  unit 11/11

public-choice-2-econ-854-caplan
  unit 1/13
  unit 2/13
  unit 3/13
  unit 4/13
  unit 5/13
  unit 6/13
  unit 7/13
  unit 8/13
  unit 9/13
  unit 10/13
  unit 11/13
  unit 12/13
  unit 13/13

public-choice-3-econ-856-leeson
  unit 1/10
  unit 2/10
  unit 3/10
  unit 4/10
  unit 5/10
  unit 6/10
  unit 7/10
  unit 8/10
  unit 9/10
  unit 10/10
