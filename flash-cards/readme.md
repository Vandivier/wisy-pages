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
  7 - As Library: foGetDynamicSchema(arro); pass in an array of objects, get a schema definition object which declares the total set of properties held by any object in the array passed in. This can be a building block for #5, deck queries, but it has applications in many software projects.

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

austrian-1-econ-880-coyne          (13 units)

austrian-2-econ-881-wagner         (4 units)

public-choice-1-econ-852-wagner    (11 units)

public-choice-2-econ-854-caplan    (13 units)

public-choice-3-econ-856-leeson    (10 units)
