

var cardsArray = [
    {
        "id": 1,
        "name": "The Fool",
        "img":
            [
                {
                    "image": "https://i48.photobucket.com/albums/f209/Katie_Higgins/tarocchi/theFool_zpsbl6v2sve.jpg", "description": "Beginnings, innocence, spontaneity, a free spirit"
                },
                {
                    "image": "https://i48.photobucket.com/albums/f209/Katie_Higgins/tarocchi/theFoolReverse_zpsjiaqx3l4.jpg", "description": "Holding back, recklessness, risk-taking"
                }

            ]


    },
    {
        "id": 2,
        "name": "The Magician",
        "img":
            [
                {
                    "image": "https://i48.photobucket.com/albums/f209/Katie_Higgins/tarocchi/theMagician_zps8zwbpigd.jpg", "description": "Manifestation, resourcefulness, power, inspired action"
                },
                {
                    "image": "https://i48.photobucket.com/albums/f209/Katie_Higgins/tarocchi/theMagicianReverse_zpsmef3zloi.jpeg", "description": "Manipulation, poor planning, untapped talents"
                }
            ]
    },
    {
        "id": 3,
        "name": "The High Priestess",
        "img":
            [
                {
                    "image": "https://i48.photobucket.com/albums/f209/Katie_Higgins/tarocchi/highPriestess_zpsf47rtdkf.jpg", "description": "Intuition, sacred knowledge, divine feminine, the subconscious mind"
                },
                {
                    "image": "https://i48.photobucket.com/albums/f209/Katie_Higgins/tarocchi/highPriestessReverse_zpsbdf1lbio.jpeg", "description": "Secrets, disconnected from intuition, withdrawal and silence"
                }
            ]
    },
    {
        "id": 4,
        "name": "The Empress",
        "img":
            [
                {
                    "image": "https://i48.photobucket.com/albums/f209/Katie_Higgins/tarocchi/theEmpress_zpstyrugqlh.jpg", "description": "Femininity, beauty, nature, nurturing, abundance"
                },
                {
                    "image": "https://i48.photobucket.com/albums/f209/Katie_Higgins/tarocchi/theEmpressReverse_zpsfk7o9apx.jpeg", "description": "Creative block, dependence on others"
                }
            ]
    },
    {
        "id": 5,
        "name": "The Emperor",
        "img":
            [
                {
                    "image": "https://i48.photobucket.com/albums/f209/Katie_Higgins/tarocchi/theEmporer_zpsviolpx1c.jpg", "description": "Authority, establishment, structure, a father figure"
                },
                {
                    "image": "https://i48.photobucket.com/albums/f209/Katie_Higgins/tarocchi/theEmporerReverse_zpsj5rvfpjp.jpeg", "description": "Domination, excessive control, lack of discipline, inflexibility"
                }
            ]
    },
    {
        "id": 6,
        "name": "The Hierophant",
        "img":
            [
                {
                    "image": "https://i48.photobucket.com/albums/f209/Katie_Higgins/tarocchi/theHierophant_zpswq9pe5ga.jpg", "description": "Spiritual wisdom, religious beliefs, conformity, tradition, institutions"
                },
                {
                    "image": "https://i48.photobucket.com/albums/f209/Katie_Higgins/tarocchi/theHierophantReverse_zpsqjkk7mdj.jpeg", "description": "Personal beliefs, freedom, challenging the status quo"
                }
            ]
    },
    {
        "id": 7,
        "name": "The Lovers",
        "img":
            [
                {
                    "image": "https://i48.photobucket.com/albums/f209/Katie_Higgins/tarocchi/theLovers_zpsrddpqlcn.jpg", "description": "Love, harmony, relationships, values alignment, choices"
                },
                {
                    "image": "https://i48.photobucket.com/albums/f209/Katie_Higgins/tarocchi/theLoversReverse_zpsbzbir2dn.jpeg", "description": "Self-love, disharmony, imbalance, misalignment of values"
                }
            ]
    },
    {
        "id": 8,
        "name": "The Chariot",
        "img":
            [
                {
                    "image": "https://i48.photobucket.com/albums/f209/Katie_Higgins/tarocchi/theChariot_zps1tycc6hs.jpg", "description": "Control, willpower, success, action, determination"
                },
                {
                    "image": "https://i48.photobucket.com/albums/f209/Katie_Higgins/tarocchi/theChariotReverse_zps2jvdgtzg.jpeg", "description": "Self-discipline, opposition, lack of direction"
                }
            ]
    },
    {
        "id": 9,
        "name": "Strength",
        "img":
            [
                {
                    "image": "https://i48.photobucket.com/albums/f209/Katie_Higgins/tarocchi/Strength_zpsge3xtzvj.jpg", "description": "Strength, courage, persuasion, influence, compassion"
                },
                {
                    "image": "https://i48.photobucket.com/albums/f209/Katie_Higgins/tarocchi/StrengthReverse_zpstptpevk4.jpeg", "description": "Inner strength, self-doubt, low energy, raw emotion"
                }
            ]
    },
    {
        "id": 10,
        "name": "The Hermit",
        "img":
            [
                {
                    "image": "https://i48.photobucket.com/albums/f209/Katie_Higgins/tarocchi/theHermit_zpshxbw7bm9.jpg", "description": "Soul-searching, introspection, being alone, inner guidance"
                },
                {
                    "image": "https://i48.photobucket.com/albums/f209/Katie_Higgins/tarocchi/theHermitReverse_zpsxxixfdvl.jpeg", "description": "Isolation, loneliness, withdrawal"                    
                }
            ]
    },
    {
        "id": 11,
        "name": "Wheel of Fortune",
        "img": 
        [
            {
                "image": "https://i48.photobucket.com/albums/f209/Katie_Higgins/tarocchi/wheelOfFortune_zpswhmpyala.jpg", "description": "Good luck, karma, life cycles, destiny, a turning point"
            },
            {
                "image": "https://i48.photobucket.com/albums/f209/Katie_Higgins/tarocchi/wheelOfFortuneReverse_zpsucptgisv.jpeg", "description": "Bad luck, resistance to change, breaking cycles"
            }
        ]
    },
    {
        "id": 12,
        "name": "Justice",
        "img": 
        [
            {
                "image": "https://i48.photobucket.com/albums/f209/Katie_Higgins/tarocchi/Justice_zpsaxgnzjbz.jpg","description": "Justice, fairness, truth, cause and effect, law"
            },
            {
                "image": "https://i48.photobucket.com/albums/f209/Katie_Higgins/tarocchi/JusticeReverse_zps7fypyqve.jpeg", "description": "Unfairness, lack of accountability, dishonesty"
            }
        ]
    },
    {
        "id": 13,
        "name": "The Hanged Man",
        "img": 
        [
            {
                "image": "https://i48.photobucket.com/albums/f209/Katie_Higgins/tarocchi/hangedMan_zpss04thidy.jpg","description": "Pause, surrender, letting go, new perspectives"
            },
            {
                "image": "https://i48.photobucket.com/albums/f209/Katie_Higgins/tarocchi/hangedManReverse_zpscdqjdfa8.jpeg", "description": "Delays, resistance, stalling, indecision"
            }
        ]
    },
    {
        "id": 14,
        "name": "Death",
        "img": 
        [
            {
                "image": "https://i48.photobucket.com/albums/f209/Katie_Higgins/tarocchi/Death_zpsyt972v0w.jpg","description": "Endings, change, transformation, transition"
            },
            {
                "image": "https://i48.photobucket.com/albums/f209/Katie_Higgins/tarocchi/DeathReverse_zpsthknfmg8.jpeg", "description": "Resistance to change, personal transformation, inner purging"
            }
        ]
    },
    {
        "id": 15,
        "name": "Temperance",
        "img": 
        [
            {
                "image": "https://i48.photobucket.com/albums/f209/Katie_Higgins/tarocchi/Temperance_zpsyioi4vwm.jpg","description": "Balance, moderation, patience, purpose"
            },
            {
                "image": "https://i48.photobucket.com/albums/f209/Katie_Higgins/tarocchi/TemperanceReverse_zps7y77ek2l.jpeg", "description": "Imbalance, excess, self-healing, re-alignment"
            }
        ]
    },
    {
        "id": 16,
        "name": "The Devil",
        "img": 
        [
            {
                "image": "https://i48.photobucket.com/albums/f209/Katie_Higgins/tarocchi/Devil_zpslelc1dmr.jpg","description": "Shadow self, attachment, addiction, restriction, sexuality"
            },
            {
                "image": "https://i48.photobucket.com/albums/f209/Katie_Higgins/tarocchi/DevilReverse_zpszh0ywykp.jpeg", "description": "Releasing limiting beliefs, exploring dark thoughts, detachment"
            }
        ]
    },
    {
        "id": 17,
        "name": "The Tower",
        "img": 
        [
            {
                "image": "https://i48.photobucket.com/albums/f209/Katie_Higgins/tarocchi/Tower_zpsa5jo33la.jpg","description": "Sudden change, upheaval, chaos, revelation, awakening"
            },
            {
                "image": "https://i48.photobucket.com/albums/f209/Katie_Higgins/tarocchi/TowerReverse_zpsf46yhzxr.jpeg", "description": "Personal transformation, fear of change, averting disaster"
            }
        ]
    },
    {
        "id": 18,
        "name": "The Star",
        "img": 
        [
            {
                "image": "https://i48.photobucket.com/albums/f209/Katie_Higgins/tarocchi/Star_zpsfxn7xac5.jpg","description": "Hope, faith, purpose, renewal, spirituality"
            },
            {
                "image": "https://i48.photobucket.com/albums/f209/Katie_Higgins/tarocchi/StarReverse_zpsjwi3kp28.jpeg", "description": "Lack of faith, despair, self-trust, disconnection"
            }
        ]
    },
    {
        "id": 19,
        "name": "The Moon",
        "img": 
        [
            {
                "image": "https://i48.photobucket.com/albums/f209/Katie_Higgins/tarocchi/Moon_zpstkrirzez.jpg","description": "Illusion, fear, anxiety, subconscious, intuition"
            },
            {
                "image": "https://i48.photobucket.com/albums/f209/Katie_Higgins/tarocchi/MoonReverse_zpspyvotbkz.jpeg", "description": "Release of fear, repressed emotion, inner confusion"
            }
        ]
    },
    {
        "id": 20,
        "name": "The Sun",
        "img": 
        [
            {
                "image": "https://i48.photobucket.com/albums/f209/Katie_Higgins/tarocchi/Sun_zpss1tve2tm.jpg","description": "Positivity, fun, warmth, success, vitality"
            },
            {
                "image": "https://i48.photobucket.com/albums/f209/Katie_Higgins/tarocchi/SunReverse_zpstkzw4kax.jpeg", "description": "Inner child, feeling down, overly optimistic"
            }
        ]
    },
    {
        "id": 21,
        "name": "Judgement",
        "img": 
        [
            {
                "image": "https://i48.photobucket.com/albums/f209/Katie_Higgins/tarocchi/Judgement_zps3jhe677i.jpg","description": "Judgement, rebirth, inner calling, absolution"
            },
            {
                "image": "https://i48.photobucket.com/albums/f209/Katie_Higgins/tarocchi/JudgementReverse_zpsxvnftzd4.jpeg", "description": "Self-doubt, inner critic, ignoring the call"
            }
        ]
    },
    {
        "id": 22,
        "name": "The World",
        "img": 
        [
            {
                "image": "https://i48.photobucket.com/albums/f209/Katie_Higgins/tarocchi/World_zpseb9wykds.jpg","description": "Completion, integration, accomplishment, travel"
            },
            {
                "image": "https://i48.photobucket.com/albums/f209/Katie_Higgins/tarocchi/WorldReverse_zpsgxib1a1p.jpeg", "description": "Seeking personal closure, short-cuts, delays"
            }
        ]
    }
];

module.exports = cardsArray;