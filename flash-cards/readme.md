# Generating Flash Cards

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

Units:

austrian-1-econ-880-coyne

austrian-2-econ-881-wagner

public-choice-1-econ-852-wagner

public-choice-2-econ-854-caplan

public-choice-3-econ-856-leeson
