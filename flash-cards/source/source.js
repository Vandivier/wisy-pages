// note: this example source.js contains flash cards targeted at the Public Choice field exam in GMU's Econ Ph.D, Fall 2017.

var oCards = {
    "cards": [
        {
            "front": "Definition of Pareto Efficiency",
            "back": "No one can be made better off without making someone else worse off.",
            "otherInfo": {
                "class": "public-choice-2-econ-854-caplan",
                "unit": "1"
            }
            },
        {
            "front": "Definition of Kaldor-Hicks Efficiency",
            "back": "A situation is Kaldor-Hicks efficient if and only if the dollar value of social resources is maximized.",
            "otherInfo": {
                "class": "public-choice-2-econ-854-caplan",
                "unit": "1"
            }
            },
        {
            "front": "Probability of single-voter decisiveness given 21 voters, where non-decisive voters vote in favor of the policy with a probability of .25?",
            "back": "Using the binomial thoerem, n = 10 and p = .25. The theorem is P(D) = [1/(squareRoot(pi*n))]*(4p-4p^2)^n. The probability of decisiveness is (.75^10)/(squareRoot(10pi)) = .01.",
            "otherInfo": {
                "class": "public-choice-2-econ-854-caplan",
                "unit": "1"
            }
            },
        {
            "front": "Why does the fact of multi-peaked voter preferences threaten the ability identify a 'will of the people?' Does it preclude the usefulness of the MVT?",
            "back": "Real voters often have multi-peaked preferences which can lead to intransitive political outcomes, or vote cycles. In such cases there may be no particular 'will of the people' because multiple outcomes can result. In the extreme case, all possible outcomes result with an equal probability. Such problematic theoretical results are empirically rare. There is strong empirical evidence that many",
            "otherInfo": {
                "class": "public-choice-2-econ-854-caplan",
                "unit": "2"
            }
            },
        {
            "front": "Why does the Tiebout Model give some reason to think local government is efficient?",
            "back": "The Tiebout Model treats local governments like competitive private firms. Under this model voters can move between jurisdictions costlessly and therefore only efficient governments will survive. If the government exhibits diminishing returns to scale, they can subdivide. Any jurisdiction can increase any service simply by increasing taxes.",
            "otherInfo": {
                "class": "public-choice-2-econ-854-caplan",
                "unit": "2"
            }
            },
        {
            "front": "What are some problems with the Tiebout Model?",
            "back": "1) Politicians face weak incentives to improve the local economy. 2) Perverse incentives: Politicians' might lives may be easier when things don't go well. 3) Individuals can't move without cost in the real world.",
            "otherInfo": {
                "class": "public-choice-2-econ-854-caplan",
                "unit": "2"
            }
            },
        {
            "front": "Define the Median Voter Theorem mathematically and in plain English.",
            "back": "Mathematically, P(D) = P(R) = P(median). D and R represent the US political parties, or any two opposed parties. In plain English, MVT holds that single-issue party platforms will converge on the preferences of the median voter given a two-party, winner-take-all voting system.",
            "otherInfo": {
                "class": "public-choice-2-econ-854-caplan",
                "unit": "2"
            }
            },
        {
            "front": "What level of political knowledge is held by voters? Is this rational?",
            "back": "Most voters have a low level of political knowledge. Search theory claims voters will search until MB = MC. Because MB(political knowledge) is small, political ignorance is rational. The level of knowledge is nonzero because of benefits like those from curiosity and signaling. There are also negative costs of some information due to the ubiquity of information. That is, some political information is costly to avoid.",
            "otherInfo": {
                "class": "public-choice-2-econ-854-caplan",
                "unit": "3",
                "url": "http://econfaculty.gmu.edu/bcaplan/e854/pc3.htm"
            }
            },
        {
            "front": "What is the Mean Voter Theorem?",
            "back": "With zero transactions costs, political bargaining implements the mean voter preference on any number of issues, even if preferences are not single-peaked.",
            "otherInfo": {
                "class": "public-choice-2-econ-854-caplan",
                "unit": "3",
                "url": "http://econfaculty.gmu.edu/bcaplan/e854/pc3.htm"
            }
            },
        {
            "front": "Does MVT mean the Mean Voter Theorem or the Median Voter Theorem?",
            "back": "MVT refers to the Median Voter Theorem.",
            "otherInfo": {
                "class": "public-choice-2-econ-854-caplan",
                "unit": "3",
                "url": "http://econfaculty.gmu.edu/bcaplan/e854/pc3.htm"
            }
            },
        {
            "front": "What is log rolling? Is it good or bad for the economy?",
            "back": "Log rolling is political bargaining between politicians. When mean and median voter preferences diverge, the median voter will select an outcome which does not maximize total surplus, but the Coase Theorem implies that log-rolling can maximize surplus in this situation by allowing the mean voter to bribe the median voter. Log rolling can also improve total surplus by resolving intransitive vote cycles.",
            "otherInfo": {
                "class": "public-choice-2-econ-854-caplan",
                "unit": "3",
                "url": "http://econfaculty.gmu.edu/bcaplan/e854/pc3.htm"
            }
            },
        {
            "front": "Suppose a politician stands to gain $75,000 by voting in favor of a special interest and against the preferences of the mean and median voters of his district. He will gain the equivalent of $25,000 in favorability if he votes in line with their preferences. There is a 10% chance he might be caught and exposed by a well-meaning reporter if he cooperates with the special interest. What action is he expected to take?",
            "back": "The politician is expected to act in order to maximize expected value. Voters can incentivize his action in their interest with a sufficiently high punishment contingent on being caught. A simple model describing the situation would be B(v) > B(s) - pD => 25000 > 75000 - .1*D => D > 500000. So we would expect the politician to act according to the will of the people if D, the cost of punishment, exceeds $.5M.",
            "otherInfo": {
                "class": "public-choice-2-econ-854-caplan",
                "unit": "3",
                "url": "http://econfaculty.gmu.edu/bcaplan/e854/pc3.htm"
            }
            },
        {
            "front": "Suppose a politician stands to gain $75,000 by voting in favor of a special interest and against the preferences of the mean and median voters of his district. He will gain the equivalent of $25,000 in favorability if he votes in line with their preferences. There is a 10% chance he might be caught and exposed by a well-meaning reporter if he cooperates with the special interest. What action is he expected to take?",
            "back": "The politician is expected to act in order to maximize expected value. Voters can incentivize his action in their interest with a sufficiently high punishment contingent on being caught. A simple model describing the situation would be B(v) > B(s) - pD => 25000 > 75000 - .1*D => D > 500000. So we would expect the politician to act according to the will of the people if D, the cost of punishment, exceeds $.5M.",
            "otherInfo": {
                "class": "public-choice-2-econ-854-caplan",
                "unit": "3",
                "url": "http://econfaculty.gmu.edu/bcaplan/e854/pc3.htm"
            }
            },
        {
            "front": "What is the empirical problem with the Miracle of Aggregation?",
            "back": "Estimative errors on either side of a value will cancel out during aggregation if they are randomly distributed, but voter calculation error is systematic rather than randomly distributed error.",
            "otherInfo": {
                "class": "public-choice-2-econ-854-caplan",
                "unit": "3",
                "url": "http://econfaculty.gmu.edu/bcaplan/e854/pc3.htm"
            }
            },
        {
            "front": "What is the SIVH?",
            "back": "The SIVH is the Self-Interested Voter Hypothesis. It can be defined as the hypothesis that political beliefs and actions of ordinary citizens are, on average, at least 95% selfish.",
            "otherInfo": {
                "class": "public-choice-2-econ-854-caplan",
                "unit": "4",
                "url": "http://econfaculty.gmu.edu/bcaplan/e854/pc4.htm"
            }
            },
        {
            "front": "What is a simple formal model that captures the standard implications of the SIVH? What are the implications?",
            "back": "The Meltzer-Richards Model is one such model. This model suggests we can divide voters into political factions by economic status: The rich and the poor. There is redistribution in equilibrium, as long as mean income exceeds median income. Implications: Politics is constrained class struggle. There is a battle between rich and poor. The poor do not want full equality because this would make them poorer too by eliminating all incentives. Similarly, the rich want to bribe the poor with some redistribution to keep crime down, prevent revolution, etc. In the M&R model, redistribution is not a product of special interest lobbying, economic confusion, or altruism. They argue that their model explains the expansion of government. As the franchise expanded, so has the divergence between median voter income and mean voter income. Poorer voters, in their rational self-interest, request higher taxes and more redistribution when asked. In spite of its Chicago stamp, people across the political spectrum, across disciplines, and even non-academics frequently think in terms of the M&R model.",
            "otherInfo": {
                "class": "public-choice-2-econ-854-caplan",
                "unit": "4",
                "url": "http://econfaculty.gmu.edu/bcaplan/e854/pc4.htm"
            }
            },
        {
            "front": "What are the 5 assumptions of the Meltzer-Richards Model?",
            "back": "1) Proportional taxes, 2) Flat welfare payment goes to everyone (as in a negative income tax), 3) Taxes and welfare affect behavior in standard ways, 4) Everyone votes for the candidate that promises them the highest net income, 5) Standard MVT holds.",
            "otherInfo": {
                "class": "public-choice-2-econ-854-caplan",
                "unit": "4",
                "url": "http://econfaculty.gmu.edu/bcaplan/e854/pc4.htm"
            }
            },
        {
            "front": "How has the SIVH performed empirically?",
            "back": "At the aggregate level there have been some mixed results. One anti-SIVH result from the SAEE is that the rich are slightly more likely to be Republican than Democratic. A pro-SIVH result is that smokers are opposed to restrictions on smoking, and heavier smokers are more strongly opposed. At the individual level the SIVH flops. Three examples are: 1) The unemployed not much more in favor of relief measures, 2) the rich and people in good health are about as in favor of national health insurance as anyone, and 3) the elderly are equally to slightly less favorable of Social Security and Medicaid compared to the young.",
            "otherInfo": {
                "class": "public-choice-2-econ-854-caplan",
                "unit": "4",
                "url": "http://econfaculty.gmu.edu/bcaplan/e854/pc4.htm"
            }
            },
        {
            "front": "What are four alternatives to the SIVH and which one is most empirically valid or plausible?",
            "back": "Sociotropic Voting, Group-Interested Voting, Ideological Voting, and Expressive Voting. Expressive voting is most empirically plausible.",
            "otherInfo": {
                "class": "public-choice-2-econ-854-caplan",
                "units": ["4", "5", "8"],
                "urls": ["http://econfaculty.gmu.edu/bcaplan/e854/pc4.htm",
                         "http://econfaculty.gmu.edu/bcaplan/e854/pc4.htm",
                         "http://econfaculty.gmu.edu/bcaplan/e854/pc8.htm"]
            }
            },
        {
            "front": "TODO",
            "back": "1) explain WHY expressive is best in above card. 2) Wittman (unit 7 and later). 3) Mathematical example of Inefficient Unanimity from unit 8. Units 10-14. Wagner and Leeson's courses. Emphasize Leeson's Human Sacrifice and answer 'Using everything you’ve learned, explain the peaceful transition from monarchy to democracy in 19th-century Europe.'",
            "otherInfo": {
                "class": "public-choice-2-econ-854-caplan",
                "units": ["4", "5", "8"],
                "urls": ["http://econfaculty.gmu.edu/bcaplan/e854/pc4.htm",
                         "http://econfaculty.gmu.edu/bcaplan/e854/pc4.htm",
                         "http://econfaculty.gmu.edu/bcaplan/e854/pc8.htm"]
            }
            }
   ]
}