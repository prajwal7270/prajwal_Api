import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(cors({
    origin: "*",
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type"
}));

let myMovies = [
    {
        "id":1,
        "title": "Game Of Thrones",
        "year": 2011,
        "rank": 15,
        "rankChange": "▲ -1",
        "rating": 96,
        "imdbRating": 9.2,
        "imdbVotes": "2m",
        "backdropImage": "https://images.justwatch.com/backdrop/10043150/s1440/game-of-thrones.webp/game-of-thrones.webp",
        "posterImage": "https://images.justwatch.com/poster/297859466/s166/game-of-thrones.webp",
        "duration": "58min",
        "highestRank": 1,
        "top10Days": 2113,
        "top100Days": 3180,
        "top1000Days": 3191,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "70k",
        "dislikes": "2.1k",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist"
    
      },

      
    {
        "id":2,
        "title": "Thangalaan ",
        "year": 2024,
        "rank": 15,
        "rankChange": "▲ -1",
        "rating": 96,
        "imdbRating": 7.2,
        "imdbVotes": "4.3k",
        "backdropImage": "https://images.justwatch.com/backdrop/319827592/s1440/thangalaan.webp/thangalaan.webp",
        "posterImage": "https://images.justwatch.com/poster/319795140/s166/thangalaan.webp",
        "duration": "2h 36min",
        "highestRank": 1,
        "top10Days": 213,
        "top100Days": 180,
        "top1000Days": 391,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "70k",
        "dislikes": "2.1k",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist"
    
      },

      
    {
        "id":3,
        "title": "Raayan",
        "year": 2024,
        "rank": 155,
        "rankChange": "▲ -14",
        "rating": 55,
        "imdbRating": 6.5,
        "imdbVotes": "8.k",
        "backdropImage": "https://images.justwatch.com/backdrop/319476194/s1440/raayan.webp/raayan.webp",
        "posterImage": "https://images.justwatch.com/poster/319733535/s166/raayan.webp",
        "duration": "2h 25min",
        "highestRank": 2,
        "top10Days": 13,
        "top100Days": 54,
        "top1000Days": 68,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "70k",
        "dislikes": "2.1k",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist"
    
      },
     
     
    
      {
        "id":4,
        "title": "TERMINATOR ZERO",
        "year": 2024,
        "rank": 52,
        "rankChange": "▲ +30",
        "rating": 76,
        "imdbRating": 7,
        "imdbVotes": "7.8k",
        "backdropImage": "https://images.justwatch.com/backdrop/319782457/s1440/terminator-zero.webp/terminator-zero.webp",
        "posterImage": "https://images.justwatch.com/poster/319782454/s166/terminator-zero.webp",
        "duration": "50min",
        "highestRank": 1,
        "top10Days": 8,
        "top100Days": 22,
        "top1000Days": 42 ,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "10k",
        "dislikes": "3k",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist"
      },

      
      {
        "id":5,
        "title": "Taaza Khabar ",
        "year": 2023,
        "rank": 1,
        "rankChange": "▲ +1",
        "rating": 82,
        "imdbRating": 8.1,
        "imdbVotes": "5.1k",
        "backdropImage": "https://images.justwatch.com/backdrop/303861907/s1440/taaza-khabar.webp/taaza-khabar.webp",
        "posterImage": "https://images.justwatch.com/poster/302379741/s166/taaza-khabar.webp",
        "duration": "29min",
        "highestRank": 1,
        "top10Days": 11,
        "top100Days": 191,
        "top1000Days": 466,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "10k",
        "dislikes": "3k",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist"
      },
    
      {
        "id":6,
        "title": "KILL",
        "year": 2024,
        "rank": 3,
        "rankChange": "▲ +1",
        "rating": 79,
        "imdbRating": 7.6,
        "imdbVotes": "27k",
        "backdropImage": "https://images.justwatch.com/backdrop/320515994/s1440/kill-2024.webp/kill-2024.webp",
        "posterImage": "https://images.justwatch.com/poster/317138629/s166/kill-2024.webp",
        "duration": "1h 45min",
        "highestRank": 1,
        "top10Days": 81,
        "top100Days": 86,
        "top1000Days": 92,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "3k",
        "dislikes": "400",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist"
      },
     
    
    
      {
        "id":7,
        "title": "SHOGUN",
        "year": 2024,
        "rank":25,
        "rankChange": "▲ -4",
        "rating": 74,
        "imdbRating": 8.6,
        "imdbVotes": "174k",
        "backdropImage": "https://images.justwatch.com/backdrop/309349707/s1440/shogun-2024.webp/shogun-2024.webp",
        "posterImage": "https://images.justwatch.com/poster/309349704/s166/shogun-2024.webp",
        "duration": "59min",
        "highestRank": 1,
        "top10Days": 125,
        "top100Days": 230,
        "top1000Days": 255,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "15k",
        "dislikes": "959",
        "watchlistText": "List",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist"
      },
    
    
      {
        "id":8,
        "title": "STREE 2:SARKATE KA AATANK",
        "year": 2024,
        "rank":79,
        "rankChange": "-",
        "rating": 79,
        "imdbRating": 7.6,
        "imdbVotes": "24k",
        "backdropImage": "https://images.justwatch.com/backdrop/319090905/s1440/stree-2.webp/stree-2.webp",
        "posterImage": "https://images.justwatch.com/poster/319603130/s166/stree-2.webp",
        "duration": "  2h 27min",
        "highestRank": 1,
        "top10Days": 125,
        "top100Days": 230,
        "top1000Days": 255,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "200k",
        "dislikes": "100",
        "watchlistText": "Watchist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist"
      },
    
    
      {
        "id":9,
        "title": "MIRZAPUR",
        "year": 2018,
        "rank": 25,
        "rankChange": "▲ +33",
        "rating": 80,
        "imdbRating": 9.0,
        "imdbVotes": "97k",
        "backdropImage": "https://images.justwatch.com/backdrop/302477284/s1440/mirzapur.webp/mirzapur.webp",
        "posterImage": "https://images.justwatch.com/poster/98979565/s166/mirzapur.webp",
        "duration": "35min",
        "highestRank": 1,
        "top10Days": 292,
        "top100Days": 702,
        "top1000Days": 852,
        "watchOptions": [
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "4k",
        "dislikes": "555",
        "watchlistText": "List",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist"
      },
    
    
    
      {
        "id":10,
        "title": "HOUSE OF THE DRAGON",
        "year": 2022,
        "rank":19,
        "rankChange": "+11",
        "rating": 95,
        "imdbRating": 8.4,
        "imdbVotes": "446k",
        "backdropImage": "https://images.justwatch.com/backdrop/317367735/s1440/house-of-the-dragon.webp/house-of-the-dragon.webp",
        "posterImage": "https://images.justwatch.com/poster/301444667/s166/house-of-the-dragon.webp",
        "duration": "  1h 3min",
        "highestRank": 1,
        "top10Days": 154,
        "top100Days": 546,
        "top1000Days": 913,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "44k",
        "dislikes": "3k",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist"
      },
     
    
      {
        "id":11,
        "title": "The Lord of the Rings: The Rings of Power",
        "year": 2022,
        "rank":18,
        "rankChange": "+13",
        "rating": 88,
        "imdbRating": 6.9,
        "imdbVotes": "380k",
        "backdropImage": "https://images.justwatch.com/backdrop/320045052/s1440/the-lord-of-the-rings-the-rings-of-power.webp/the-lord-of-the-rings-the-rings-of-power.webp",
        "posterImage": "https://images.justwatch.com/poster/260075695/s166/the-lord-of-the-rings-the-rings-of-power.webp",
        "duration": "  1h 8min",
        "highestRank": 1,
        "top10Days": 47,
        "top100Days": 197,
        "top1000Days": 938,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "57k",
        "dislikes": "2.1",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist"
      },
      {
        "id":12,
        "title": "PANCHAYAT",
        "year": 2020,
        "rank": 3,
        "rankChange": "▲ +2",
        "rating": 79,
        "imdbRating": 8.4,
        "imdbVotes": "87k",
        "backdropImage": "https://images.justwatch.com/backdrop/306672231/s1440/panchayat.webp/panchayat.webp",
        "posterImage": "https://images.justwatch.com/poster/316699631/s166/panchayat.webp",
        "duration": "50min",
        "highestRank": 1,
        "top10Days": 1003,
        "top100Days": 1877,
        "top1000Days": 2141,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "1.3k",
        "dislikes": "200",
        "watchlistText": "List",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist"
      },
     
      
      {
        "id":13,
        "title": "AFRAID",
        "year": 2024,
        "rank":18,
        "rankChange": "+13",
        "rating": 56,
        "imdbRating": 5.1,
        "imdbVotes": "4.8k",
        "backdropImage": "https://images.justwatch.com/backdrop/320204860/s1440/they-listen.webp/they-listen.webp",
        "posterImage": "https://images.justwatch.com/poster/318949087/s166/they-listen.webp",
        "duration": "  1h 8min",
        "highestRank": 1,
        "top10Days": 47,
        "top100Days": 197,
        "top1000Days": 938,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "51",
        "dislikes": "23",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist"
      },
    
    
      {
        "id":14,
        "title": "Gyaarah Gyaarah ",
        "year": 2024,
        "rank":13,
        "rankChange": "-6",
        "rating": 84,
        "imdbRating": 8.2,
        "imdbVotes": "4.9k",
        "backdropImage": "https://images.justwatch.com/backdrop/319735385/s1440/gyaarah-gyaarah.webp/gyaarah-gyaarah.webp",
        "posterImage": "https://images.justwatch.com/poster/320432932/s166/gyaarah-gyaarah.webp",
        "duration": "  1h 8min",
        "highestRank": 1,
        "top10Days": 44,
        "top100Days": 48,
        "top1000Days": 52,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "100",
        "dislikes": "12k",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist"
      },
    
      {
        "id":15,
        "title": "Shekhar Home",
        "year": 2024,
        "rank":46,
        "rankChange": "+96",
        "rating": 77,
        "imdbRating": 8.2,
        "imdbVotes": "10k",
        "backdropImage": "https://images.justwatch.com/backdrop/320002670/s1440/shekhar-home.webp/shekhar-home.webp",
        "posterImage": "https://images.justwatch.com/poster/319810199/s166/shekhar-home.webp",
        "duration": "  1h 8min",
        "highestRank": 1,
        "top10Days": 21,
        "top100Days": 39,
        "top1000Days": 46,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "52",
        "dislikes": "7",
        "watchlistText": "List",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist"
      },
    
      
      {
        "id":16,
        "title": "TOUCH",
        "year": 2024,
        "rank":66,
        "rankChange": "-3",
        "rating": 75,
        "imdbRating": 2.5,
        "imdbVotes": "10k",
        "backdropImage": "https://images.justwatch.com/backdrop/316456492/s1440/touch-0.webp/touch-0.webp",
        "posterImage": "https://images.justwatch.com/poster/314498863/s166/touch-0.webp",
        "duration": "  2h 1min",
        
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "36",
        "dislikes": "9",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist"
      },
    
      
      {
        "id":17,
        "title": "Watchmen",
        "year": 2009,
        "rank":618,
        "rankChange": "+300",
        "rating": 92,
        "imdbRating": 7.6,
        "imdbVotes": "589k",
        "backdropImage": "https://images.justwatch.com/backdrop/179879377/s1440/watchmen.webp/watchmen.webp",
        "posterImage": "https://images.justwatch.com/poster/211398541/s166/watchmen.webp",
        "duration": "  2h 42min",
        "highestRank": 3,
        "top10Days": 8,
        "top100Days": 105,
        "top1000Days": 2242,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "17k",
        "dislikes": "1k",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist"
      },
    
      {
        "id":18,
        "title": "Dìdi (弟弟)",
        "year": 2024,
        "rank":81,
        "rankChange": "-1",
        "rating": 81,
        "imdbRating": 7.5,
        "imdbVotes": "4.8k",
        "backdropImage": "https://images.justwatch.com/backdrop/320517305/s1440/didi-di-di.webp/didi-di-di.webp",
        "posterImage": "https://images.justwatch.com/poster/320858544/s166/didi-di-di.webp",
        "duration": "  1h 34min",
        "highestRank": 2,
        "top10Days": 18,
        "top100Days": 95,
        "top1000Days": 242,
       
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "64",
        "dislikes": "8",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist"
      },
    
     
      {
        "id":19,
        "title": "Horizon: An American Saga - Chapter 1", 
        "year": 2024,
        "rank":79,
        "rankChange": "+300",
        "rating": 6.7,
        "imdbRating": 7.6,
        "imdbVotes": "26k",
        "backdropImage": "https://images.justwatch.com/backdrop/318955943/s1440/horizon-an-american-saga-chapter-1.webp/horizon-an-american-saga-chapter-1.webp",
        "posterImage": "https://images.justwatch.com/poster/317958898/s166/horizon-an-american-saga-chapter-1.webp",
        "duration": "3h 1min",
        "highestRank": 1,
        "top10Days": 58,
        "top100Days": 105,
        "top1000Days": 442,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "544",
        "dislikes": "3k",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist"
      },
    
      {
        "id":20,
        "title": "Despicable Me 4",
        "year": 2024,
        "rank":83,
        "rankChange": "+300",
        "rating": 83,
        "imdbRating": 6.2,
        "imdbVotes": "42k",
        "backdropImage": "https://images.justwatch.com/backdrop/311602034/s1440/despicable-me-4-2024.webp/despicable-me-4-2024.webp",
        "posterImage": "https://images.justwatch.com/poster/317954832/s166/despicable-me-4-2024.webp",
        "duration": "  1h 34min",
        "highestRank": 2,
        "top10Days": 67,
        "top100Days": 123,
        "top1000Days": 442,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "28k",
        "dislikes": "140",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist"
      },
    
      {
        "id":21,
        "title": "Twisters",
        "year": 2024,
        "rank":89,
        "rankChange": "+2950",
        "rating": 89,
        "imdbRating": 6.6,
        "imdbVotes": "102k",
        "backdropImage": "https://images.justwatch.com/backdrop/311705103/s1440/twisters.webp/twisters.webp",
        "posterImage": "https://images.justwatch.com/poster/315736719/s166/twisters.webp",
        "duration": "  2h 2min",
        "highestRank": 1,
        "top10Days": 61,
        "top100Days": 135,
        "top1000Days": 242,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "1.9k",
        "dislikes": "310",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist"
      },
    
    
      {
        "id":22,
        "title": "Trap",
        "year": 2024,
        "rank":78,
        "rankChange": "+300",
        "rating": 78,
        "imdbRating": 6.0,
        "imdbVotes": "66k",
        "backdropImage": "https://images.justwatch.com/backdrop/319859355/s1440/trap-2024.webp/trap-2024.webp",
        "posterImage": "https://images.justwatch.com/poster/319859347/s166/trap-2024.webp",
        "duration": " 1h 45min",
        "highestRank": 2,
        "top10Days":18,
        "top100Days": 95,
        "top1000Days": 642,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "713",
        "dislikes": "221",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist"
      },
    
      
      {
        "id":23,
        "title": "Inside Out",
        "year": 2015,
        "rank":134,
        "rankChange": "-26",
        "rating": 97,
        "imdbRating": 8.1,
        "imdbVotes": "829k",
        "backdropImage": "https://images.justwatch.com/backdrop/178301399/s1440/inside-out.webp/inside-out.webp",
        "posterImage": "https://images.justwatch.com/poster/178301392/s166/inside-out.webp",
        "duration": "  1h 35min",
        "highestRank": 2,
        "top10Days": 28,
        "top100Days": 220,
        "top1000Days": 559,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "35k",
        "dislikes": "1.1k",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist"
      },
    
      
      {
        "id":24,
        "title": "Kinds of Kindness",
        "year": 2024,
        "rank":23,
        "rankChange": "+43",
        "rating": 70,
        "imdbRating": 6.6,
        "imdbVotes": "36k",
        "backdropImage": "https://images.justwatch.com/backdrop/319989886/s1440/kinds-of-kindness.webp/kinds-of-kindness.webp",
        "posterImage": "https://images.justwatch.com/poster/316333916/s166/kinds-of-kindness.webp",
        "duration": "  2h 44min",
        "highestRank": 10,
        "top10Days": 1,
        "top100Days": 32,
        "top1000Days": 136,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "700",
        "dislikes": "300",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist"
      },
    
      
      {
        "id":25,
        "title": "The Bikeriders",
        "year": 2024,
        "rank":23,
        "rankChange": "+43",
        "rating": 82,
        "imdbRating": 6.7,
        "imdbVotes": "46k",
        "backdropImage": "https://images.justwatch.com/backdrop/318653942/s1440/the-bikeriders.webp/the-bikeriders.webp",
        "posterImage": "https://images.justwatch.com/poster/318653937/s166/the-bikeriders.webp",
        "duration": "  1h 46min",
        "highestRank": 2,
        "top10Days": 18,
        "top100Days": 205,
        "top1000Days": 1342,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "801",
        "dislikes": "151",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist"
      },
    
      {
        "id":26,
        "title": "Watchers 1: UFOs are Real, Burgeoning, and Not Going Away",
        "year": 2010,
        "rank":20,
        "rankChange": "+430",
        "rating": 82,
        "imdbRating": 7.2,
        "imdbVotes": "34k",
        "backdropImage": "https://images.justwatch.com/backdrop/270361552/s1440/.webp.webp",
        "posterImage": "https://images.justwatch.com/poster/270361550/s166/.webp",
        "duration": "  2h 44min",
        "highestRank": 1,
        "top10Days": 34,
        "top100Days": 51,
        "top1000Days": 446,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "20",
        "dislikes": "20k",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist"
      },
     
      {
        "id":27,
        "title": "You Gotta Believe",
        "year": 2024,
        "rank":21,
        "rankChange": "+53",
        "rating": 78,
        "imdbRating": 5.4,
        "imdbVotes": "350k",
        "backdropImage": "https://images.justwatch.com/backdrop/320911483/s1440/you-gotta-believe.webp/you-gotta-believe.webp",
        "posterImage": "https://images.justwatch.com/poster/320060716/s166/you-gotta-believe.webp",
        "duration": "  1h 44min",
        "highestRank": 1,
        "top10Days": 18,
        "top100Days": 205,
        "top1000Days": 2241,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "500",
        "dislikes": "1.5k",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist"
      },
      {
        "id":28,
        "title": "Bad Boys: Ride or Die",
        "year": 2024,
        "rank":133,
        "rankChange": "+244",
        "rating": 89,
        "imdbRating": 6.6,
        "imdbVotes": "70k",
        "backdropImage": "https://images.justwatch.com/backdrop/319338410/s1440/bad-boys-4.webp/bad-boys-4.webp",
        "posterImage": "https://images.justwatch.com/poster/319430880/s166/bad-boys-4.webp",
        "duration": "  1h 55min",
        "highestRank": 2,
        "top10Days": 4,
        "top100Days": 48,
        "top1000Days": 124,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "20",
        "dislikes": "20k",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist"
      },
    
     
    
      
      {
        "id":29,
        "title": "Batman: The Dark Knight Returns, Part 1",
        "year": 2012,
        "rank":1,
        "rankChange": "+1",
        "rating": 88,
        "backdropImage": "https://images.justwatch.com/backdrop/320550333/s1440/batman-the-dark-knight-returns-part-1.webp/batman-the-dark-knight-returns-part-1.webp",
        "posterImage": "https://images.justwatch.com/poster/144994120/s166/batman-the-dark-knight-returns-part-1.webp",
        "duration": "  1h 16min",
        "highestRank": 1,
        "top10Days": 64,
        "top100Days": 148,
        "top1000Days": 1124,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "1.9k",
        "dislikes": "235",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist"
      },
    
      {
        "id":30,
        "title": "The Fast and the Furious",
        "year": 2001,
        "rank":729,
        "rankChange": "+314",
        "rating": 92,
        "imdbRating": 6.8,
        "imdbVotes": "426k",
        "backdropImage": "https://images.justwatch.com/backdrop/39788434/s1440/the-fast-and-the-furious.webp/the-fast-and-the-furious.webp",
        "posterImage": "https://images.justwatch.com/poster/216020619/s166/the-fast-and-the-furious.webp",
        "duration": "  1h 46min",
        "highestRank": 25,
        "top10Days": 0,
        "top100Days": 51,
        "top1000Days": 1109,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "13k",
        "dislikes": "1k",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist"
      },
    
    
      {
        "id":31,
        "title": "Extraction",
        "year": 2020,
        "rank":724,
        "rankChange": "+337",
        "rating": 94,
        "imdbRating": 6.8,
        "imdbVotes": "270k",
        "backdropImage": "https://images.justwatch.com/backdrop/177559132/s1440/extraction-2020.webp/extraction-2020.webp",
        "posterImage": "https://images.justwatch.com/poster/176320403/s166/extraction-2020.webp",
        "duration": "  1h 56min",
        "highestRank": 1,
        "top10Days": 5,
        "top100Days": 39,
        "top1000Days": 614,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "12k",
        "dislikes": "648",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist"
      },
    
      
      {
        "id":32,
        "title": "MULAN",
        "year": 2020,
        "rank":722,
        "rankChange": "+594",
        "rating": 74,
        "imdbRating": 5.8,
        "imdbVotes": "160k",
        "backdropImage": "https://images.justwatch.com/backdrop/199842629/s1440/mulan-2020.webp/mulan-2020.webp",
        "posterImage": "https://images.justwatch.com/poster/166091963/s166/mulan-2020.webp",
        "duration": "  1h 55min",
        "highestRank": 1,
        "top10Days": 8,
        "top100Days": 39,
        "top1000Days": 454,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "8.2k",
        "dislikes": "2.8k",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist"
      },
    
    
      {
        "id":33,
        "title": "Captain America: The First Avenger",
        "year": 2011,
        "rank":768,
        "rankChange": "+353",
        "rating": 96,
        "imdbRating": 6.9,
        "imdbVotes": "910k",
        "backdropImage": "https://images.justwatch.com/backdrop/198981995/s1440/captain-america-the-first-avenger.webp/captain-america-the-first-avenger.webp",
        "posterImage": "https://images.justwatch.com/poster/8646724/s166/captain-america-the-first-avenger.webp",
        "duration": "  2h 4min",
        "highestRank": 4,
        "top10Days": 4,
        "top100Days": 192,
        "top1000Days": 2391,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "21k",
        "dislikes": "729",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist"
      },
    
      
      {
        "id":34,
        "title": "Deadpool 2",
        "year": 2018,
        "rank":411,
        "rankChange": "+295",
        "rating": 96,
        "imdbRating": 7.6,
        "imdbVotes": "683k",
        "backdropImage": "https://images.justwatch.com/backdrop/55613628/s1440/deadpool-2.webp/deadpool-2.webp",
        "posterImage": "https://images.justwatch.com/poster/61870323/s166/deadpool-2.webp",
        "duration": "  1h 59min",
        "highestRank": 4,
        "top10Days": 19,
        "top100Days": 289,
        "top1000Days": 2214,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "33k",
        "dislikes": "1.3k",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist"
      },
    
    
      
      {
        "id":35,
        "title": "Deadpool & Wolverine",
        "year": 2024,
         "rank":4,
        "rankChange": "+295",
        "rating": 95,
        "imdbRating": 8.0,
        "imdbVotes": "288k",
        "backdropImage": "https://images.justwatch.com/backdrop/319139252/s1440/deadpool-3.webp/deadpool",
        "posterImage": "https://images.justwatch.com/poster/318387357/s166/deadpool-3.webp",
        "duration": "  2h 8min",
        "highestRank": 2,
        "top10Days": 29,
        "top100Days": 489,
        "top1000Days": 3214,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "5.3k",
        "dislikes": "196k",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist"
      },
    
      
      {
        "id":36,
        "title": "The Marvels",
        "year": 2023,
        "rank":3046,
        "rankChange": "+2311",
        "rating": 69,
        "imdbRating": 5.5,
        "imdbVotes": "133k",
        "backdropImage": "https://images.justwatch.com/backdrop/319480621/s1440/the-marvels.webp/the-marvels.webp",
        "posterImage": "https://images.justwatch.com/poster/244761547/s166/the-marvels.webp",
        "duration": "  1h 45min",
        "highestRank": 4,
        "top10Days": 5,
        "top100Days": 61,
        "top1000Days": 312,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "4.4k",
        "dislikes": "1.9k",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist"
      },
    
      
      {
        "id":37,
        "title": "The Guardians of the Galaxy Holiday Special",
        "year": 2022,
        "rank":964,
        "rankChange": "+445",
        "rating": 90,
        "imdbRating": 6.9,
        "imdbVotes": "97k",
        "backdropImage": "https://images.justwatch.com/backdrop/301916630/s1440/the-guardians-of-the-galaxy-holiday-special.webp/the-guardians-of-the-galaxy-holiday-special.webp",
        "posterImage": "https://images.justwatch.com/poster/301774755/s166/the-guardians-of-the-galaxy-holiday-special.webp",
        "duration": "  1h 45min",
        "highestRank": 4,
        "top10Days": 5,
        "top100Days": 61,
        "top1000Days": 312,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "8.1k",
        "dislikes": "876",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist"
      },
    
       
      {
        "id":38,
        "title": "Ant-Man and the Wasp: Quantumania",
        "year": 2023,
        "rank":2819,
        "rankChange": "+2115",
        "rating": 73,
        "imdbRating": 6.0,
        "imdbVotes": "238k",
        "backdropImage": "https://images.justwatch.com/backdrop/303438481/s1440/ant-man-3.webp/ant-man-3.webp",
        "posterImage": "https://images.justwatch.com/poster/302408188/s166/ant-man-3.webp",
        "duration": "  2h 5min",
        "highestRank": 1,
        "top10Days": 33,
        "top100Days": 113,
        "top1000Days": 349,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "16k",
        "dislikes": "1k",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist"
      },
    
      {
        "id":39,
        "title": "Thor: Love and Thunder",
        "year": 2022,
        "rank":903,
        "rankChange": "+537",
        "rating": 77,
        "imdbRating": 6.2,
        "imdbVotes": "238k",
        "backdropImage": "https://images.justwatch.com/backdrop/300409455/s1440/thor-love-and-thunder.webp/thor-love-and-thunder.webp",
        "posterImage": "https://images.justwatch.com/poster/300706764/s166/thor-love-and-thunder.webp",
        "duration": "  1h 59min",
        "highestRank": 1,
        "top10Days": 77,
        "top100Days": 160,
        "top1000Days": 473,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "20k",
        "dislikes": "10k",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist"
      },
    
      
      {
        "id":40,
        "title": "Avengers: Endgame",
        "year": 2019,
        "rank":535,
        "rankChange": "+247",
        "rating": 97,
        "imdbRating": 8.4,
        "imdbVotes": "1m",
        "backdropImage": "https://images.justwatch.com/backdrop/108456304/s1440/avengers-endgame.webp/avengers-endgame.webp",
        "posterImage": "https://images.justwatch.com/poster/118339636/s166/avengers-endgame.webp",
        "duration": "  3h 1min",
        "highestRank": 1,
        "top10Days": 52,
        "top100Days": 555,
        "top1000Days": 1963,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "98k",
        "dislikes": "1.5k",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist"
      },
      
      {
        "id":41,
        "title": "Logan",
        "year": 2017,
        "rank":443,
        "rankChange": "+269",
        "rating": 96,
        "imdbRating": 8.1,
        "imdbVotes": "861k",
        "backdropImage": "https://images.justwatch.com/backdrop/10573557/s1440/logan.webp/logan.webp",
        "posterImage": "https://images.justwatch.com/poster/76832017/s166/logan.webp",
        "duration": "  2h 17min",
        "highestRank": 6,
        "top10Days": 11,
        "top100Days": 365,
        "top1000Days": 2449,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "98k",
        "dislikes": "1.5k",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist"
      },
    
    

      {
        "id":42,
        "title": "The Amazing Spider-Man",
        "year": 2012,
        "rank":406,
        "rankChange": "+113",
        "rating": 92,
        "imdbRating": 6.9,
        "imdbVotes": "714k",
        "backdropImage": "https://images.justwatch.com/backdrop/204659694/s1440/the-amazing-spider-man.webp/the-amazing-spider-man.webp",
        "posterImage": "https://images.justwatch.com/poster/300565238/s166/the-amazing-spider-man.webp",
        "duration": "  2h 16min",
        "highestRank": 1,
        "top10Days": 50,
        "top100Days": 335,
        "top1000Days": 2145,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "100k",
        "dislikes": "2.1k",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist"
      },
    
      {
        "id":43,
        "title": "Ravanasura",
        "year": 2023,
        "rank":605,
        "rankChange": "+467",
        "rating": 40,
        "imdbRating": 5.7,
        "imdbVotes": "2.6k",
        "backdropImage": "https://images.justwatch.com/backdrop/304258843/s1440/ravanasura.webp/ravanasura.webp",
        "posterImage": "https://images.justwatch.com/poster/316652935/s166/ravanasura.webp",
        "duration": "  2h 22min",
        "highestRank": 1,
        "top10Days": 4,
        "top100Days": 24,
        "top1000Days": 167,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "77",
        "dislikes": "2.1k",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist"
      },
    
    
     
      {
        "id":44,
        "title": "Shang-Chi and the Legend of the Ten Rings",
        "year": 2021,
        "rank":790,
        "rankChange": "+353",
        "rating": 93,
        "imdbRating": 7.4,
        "imdbVotes": "446k",
        "backdropImage": "https://images.justwatch.com/backdrop/249102371/s1440/shang-chi-and-the-legend-of-the-ten-rings.webp/shang-chi-and-the-legend-of-the-ten-rings.webp",
        "posterImage": "https://images.justwatch.com/poster/249961834/s166/shang-chi-and-the-legend-of-the-ten-rings.webp",
        "duration": "  2h 12min",
        "highestRank": 1,
        "top10Days": 69,
        "top100Days": 83,
        "top1000Days": 705,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "38k",
        "dislikes": "2.5k",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist"
      },

      {
        "id":45,
        "title": "Annavaram",
        "year": 2006,
        "rank":12743,
        "rankChange": "+20370",
        "rating": 93,
        "imdbRating": 4.9,
        "imdbVotes": "985k",
        "backdropImage": "https://images.justwatch.com/backdrop/202520478/s1440/annavaram.webp/annavaram.webp",
        "posterImage": "https://images.justwatch.com/poster/309833648/s166/annavaram.webp",
        "duration": "  2h 55min",
        "highestRank": 213,
        "top10Days": 0,
        "top100Days": 0,
        "top1000Days": 3,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "38k",
        "dislikes": "2.5k",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist"
      },
      
      
      {
        "id":46,
        "title": "Bholaa",
        "year": 2024,
        "rank":3262,
        "rankChange": "+2513",
        "rating": 53,
        "backdropImage": "https://images.justwatch.com/backdrop/304668096/s1440/bholaa-2022.webp/bholaa-2022.webp",
        "posterImage": "https://images.justwatch.com/poster/309164504/s166/bholaa-2022.webp",
        "duration": "  2h 24min",
        "highestRank": 1,
        "top10Days": 13,
        "top100Days": 85,
        "top1000Days": 259,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "159K",
        "dislikes": "112",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist"
      },
    
      
      
      {
        "id":47,
        "title": "DEVARA PART 1",
        "year": 2024,
        "rank":1,
        "rankChange": "+250",
        "rating": 23,
        "backdropImage": "https://images.justwatch.com/backdrop/320975336/s1440/ntr-30.webp/ntr-30.webp",
        "posterImage": "https://images.justwatch.com/backdrop/320975332/s1440/ntr-30.webp/ntr-30.webp",
        "duration": "  2h 50min",
        "highestRank": 2,
        "top10Days": 14,
        "top100Days": 55,
        "top1000Days": 159,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "78k",
        "dislikes": "3.2k",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist"
      },
    
    
      {
        "id":48,
        "title": "Nosferatu the Vampyre ",
        "year": 1979,
        "rating": 81,
        "imdbRating": 7.4,
        "imdbVotes": "4.1k",
        "backdropImage": "https://images.justwatch.com/backdrop/305921926/s1440/nosferatu-the-vampyre.webp/nosferatu-the-vampyre.webp",
        "posterImage": "https://images.justwatch.com/poster/202949568/s166/nosferatu-the-vampyre.webp",
        "duration": "  2h 5min",
        "highestRank": 1,
        "top10Days": 16,
        "top100Days": 75,
        "top1000Days": 659,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "691",
        "dislikes": "135",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist"
      },
    
      {
        "id":49,
        "title": "The Umbrella Academy",
        "year": 2019,
        "rank":143,
        "rankChange": "+7",
        "rating": 92,
        "imdbRating": 7.8,
        "imdbVotes": "293k",
        "backdropImage": "https://images.justwatch.com/backdrop/286521525/s1440/the-umbrella-academy.webp/the-umbrella-academy.webp",
        "posterImage": "https://images.justwatch.com/poster/286305959/s166/the-umbrella-academy.webp",
        "duration": "  2h 5min",
        "highestRank": 2,
        "top10Days": 14,
        "top100Days":237,
        "top1000Days": 1871,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "29k",
        "dislikes": "2.4k",
        "watchlistText": "List",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist"
      },
      {
        "id":50,
        "title": "It Follows",
        "year": 2015,
        "rank":234,
        "rankChange": "+330",
        "rating": 89,
        "imdbRating": 6.8,
        "imdbVotes": "277k",
        "backdropImage": "https://images.justwatch.com/backdrop/183675309/s1440/it-follows.webp/it-follows.webp",
        "posterImage": "https://images.justwatch.com/poster/139649239/s166/it-follows.webp",
        "duration": "  1h 41min",
        "highestRank": 3,
        "top10Days": 9,
        "top100Days":2177,
        "top1000Days": 1871,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "29k",
        "dislikes": "2.4k",
        "watchlistText": "List",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist"
      },
    
    
      
    
    
      {
        "id":51,
        "title": "Gladiator II",
        "year": 2024,
        "rating": 85,
        "rank":500,
        "rankChange": "+4300",
        "rating": 89,
        "imdbRating": 6.3,
        "imdbVotes": "593k",
        "backdropImage": "https://images.justwatch.com/backdrop/318611814/s1440/gladiator-2.webp/gladiator-2.webp",
        "posterImage": "https://images.justwatch.com/poster/318611809/s166/gladiator-2.webp",
        "duration": "  2h 30min",
        "highestRank": 2,
        "top10Days": 69,
        "top100Days":177,
        "top1000Days": 2871,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "79",
        "dislikes": "6",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist"
      },
    
    
      {
        "id":52,
        "title": "Thunderbolts*",
        "year": 2025,
        "rank":123,
        "rankChange": "+78",
        "rating": 95,
        "imdbRating": 8.8,
        "imdbVotes": "490k",
        "backdropImage": "https://images.justwatch.com/backdrop/300660467/s1440/thunderbolts.webp/thunderbolts.webp",
        "posterImage": "https://images.justwatch.com/poster/313902806/s166/thunderbolts.webp",
        "duration": "  2h 0min",
        "highestRank": 2,
        "top10Days": 15,
        "top100Days":277,
        "top1000Days": 671,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "38k",
        "dislikes": "10k",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist"
      },
    
      {
        "id":53,
        "title": "The Lord of the Rings: The Fellowship of the Ring",
        "year": 2001,
        "rank":123,
        "rankChange": "+148",
        "rating": 96,
        "imdbRating": 8.9,
        "imdbVotes": "2m",
        "backdropImage": "https://images.justwatch.com/backdrop/301567989/s1440/the-lord-of-the-rings-the-fellowship-of-the-ring.webp/the-lord-of-the-rings-the-fellowship-of-the-ring.webp",
        "posterImage": "https://images.justwatch.com/poster/8731868/s166/the-lord-of-the-rings-the-fellowship-of-the-ring.webp",
        "duration": "  2h 58min",
        "highestRank": 5,
        "top10Days": 2,
        "top100Days":532,
        "top1000Days": 2983,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "57k",
        "dislikes": "2.1k",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist"
      },
    
      {
        "id":54,
        "title": "Mr. Crocket",
        "year": 2024,
        "rank":1430,
        "rankChange": "+7900",
        "rating": 53,
        "imdbRating": 4.8,
        "imdbVotes": "2930k",
        "backdropImage": "https://images.justwatch.com/backdrop/320870614/s1440/mr-crocket.webp/mr-crocket.webp",
        "posterImage": "https://images.justwatch.com/poster/320870611/s166/mr-crocket.webp",
        "duration": "  1h 28min",
        "highestRank": 2,
        "top10Days": 21,
        "top100Days":432,
        "top1000Days": 1983,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "129",
        "dislikes": "47",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist"
      },
      {
        "id":55,
        "title": "Ridley",
        "year": 2022,
        "rank":430,
        "rankChange": "-21",
        "rating": 43,
        "imdbRating": 4.2,
        "imdbVotes": "293k",
        "backdropImage": "https://images.justwatch.com/backdrop/300670843/s1440/ridley.webp/ridley.webp",
        "posterImage": "https://images.justwatch.com/poster/300655573/s166/ridley.webp",
        "duration": "  1h 12min",
        "highestRank": 2,
        "top10Days": 14,
        "top100Days":132,
        "top1000Days": 183,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "129",
        "dislikes": "47",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist"
      },
      {
        "id":56,
        "title": "Gremlins: Secrets of the Mogwai ",
        "year": 2023,
        "rank":130,
        "rankChange": "+2",
        "rating": 47,
        "imdbRating": 7.0,
        "imdbVotes": "293k",
        "backdropImage": "https://images.justwatch.com/backdrop/306854096/s1440/gremlins-secrets-of-the-mogwai.webp/gremlins-secrets-of-the-mogwai.webp",
        "posterImage": "https://images.justwatch.com/poster/305374487/s166/gremlins-secrets-of-the-mogwai.webp",
        "duration": "  23min",
        "highestRank": 1,
        "top10Days": 14,
        "top100Days":12,
        "top1000Days": 183,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "129",
        "dislikes": "47",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist"
      },
      {
        "id":57,
        "title": "Spin the Bottle",
        "year": 2024,
        "rank":130,
        "rankChange": "+2",
        "rating": 47,
        "imdbRating": 7.0,
        "imdbVotes": "293k",
        "backdropImage": "https://images.justwatch.com/backdrop/320945962/s1440/.webp.webp",
        "posterImage": "https://images.justwatch.com/poster/320945960/s166/.webp",
        "duration": "  1h 23min",
        "highestRank": 1,
        "top10Days": 14,
        "top100Days":12,
        "top1000Days": 183,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "129",
        "dislikes": "47",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist"
      },
      {
        "id":58,
        "title": "Small Things Like These",
        "year": 2024,
        "rank":13,
        "rankChange": "+24",
        "rating": 47,
        "imdbRating": 7.5,
        "imdbVotes": "428k",
        "backdropImage": "https://images.justwatch.com/backdrop/312101749/s1440/small-things-like-these.webp/small-things-like-these.webp",
        "posterImage": "https://images.justwatch.com/poster/320860906/s166/small-things-like-these.webp",
        "duration": "  1h 38min",
        "highestRank": 1,
        "top10Days": 24,
        "top100Days":45,
        "top1000Days": 238,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "129",
        "dislikes": "47",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist"
      },
      {
        "id":59,
        "title": "Brothers",
        "year": 2024,
        "rank":23,
        "rankChange": "+24",
        "rating": 47,
        "imdbRating": 6.5,
        "imdbVotes": "128k",
        "backdropImage": "https://images.justwatch.com/backdrop/320790220/s1440/brothers-2024.webp/brothers-2024.webp",
        "posterImage": "https://images.justwatch.com/poster/320791032/s166/brothers-2024.webp",
        "duration": "  1h 28min",
        "highestRank": 1,
        "top10Days": 14,
        "top100Days":57,
        "top1000Days": 138,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "129",
        "dislikes": "47",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist"
      },
      {
        "id":60,
        "title": "The Fire Inside",
        "year": 2024,
        "rank":46,
        "rankChange": "+4",
        "rating": 47,
        "imdbRating": 7.5,
        "imdbVotes": "56k",
        "backdropImage": "https://images.justwatch.com/backdrop/319494366/s1440/flint-strong.webp/flint-strong.webp",
        "posterImage": "https://images.justwatch.com/poster/320762577/s166/flint-strong.webp",
        "duration": "  1h 49min",
        "highestRank": 1,
        "top10Days": 14,
        "top100Days":17,
        "top1000Days": 38,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "129",
        "dislikes": "47",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist"
      },

      {
        "id":61,
        "title": "Where's Wanda?",
        "year": 2024,
        "rank":46,
        "rankChange": "+1",
        "rating": 47,
        "imdbRating": 6.5,
        "imdbVotes": "46k",
        "backdropImage": "https://images.justwatch.com/backdrop/320609232/s1440/wheres-wanda.webp/wheres-wanda.webp",
        "posterImage": "https://images.justwatch.com/poster/320609229/s166/wheres-wanda.webp",
        "duration": "  1h 49min",
        "highestRank": 1,
        "top10Days": 14,
        "top100Days":17,
        "top1000Days": 38,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "129",
        "dislikes": "47",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist"
      },

      {
        "id":62,
        "title": "Salem's Lot ",
        "year": 2024,
        "rank":26,
        "rankChange": "+1",
        "rating": 84,
        "imdbRating": 6.8,
        "imdbVotes": "82k",
        "backdropImage": "https://images.justwatch.com/backdrop/320706218/s1440/salems-lot.webp/salems-lot.webp",
        "posterImage": "https://images.justwatch.com/poster/313092965/s166/salems-lot.webp",
        "duration": "  1h 53min",
        "highestRank": 2,
        "top10Days": 114,
        "top100Days":127,
        "top1000Days": 238,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "129",
        "dislikes": "47",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist"
      },
    
      {
        "id":63,
        "title": "Rumours",
        "year": 2024,
        "rank":16,
        "rankChange": "+22",
        "rating": 84,
        "imdbRating": 6.6,
        "imdbVotes": "340k",
        "backdropImage": "https://images.justwatch.com/backdrop/315738774/s1440/rumours.webp/rumours.webp",
        "posterImage": "https://images.justwatch.com/poster/320680690/s166/rumours.webp",
        "duration": "  1h 49min",
        "highestRank": 2,
        "top10Days": 114,
        "top100Days":127,
        "top1000Days": 238,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "129",
        "dislikes": "47",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist"
      },
      {
        "id":64,
        "title": "Howl's Moving Castle",
        "year": 2004,
        "rank":3480,
        "rankChange": "+2738",
        "rating": 96,
        "imdbRating": 8.2,
        "imdbVotes": "463k",
        "backdropImage": "https://images.justwatch.com/backdrop/9036037/s1440/howls-moving-castle.webp/howls-moving-castle.webp",
        "posterImage": "https://images.justwatch.com/poster/168430901/s166/howls-moving-castle.webp",
        "duration": "  1h 59min",
        "highestRank": 18,
        "top10Days": 0,
        "top100Days":2,
        "top1000Days": 385,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "117",
        "dislikes": "565",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist"
      },
      {
        "id":65,
        "title": "Frasier",
        "year": 1993,
        "rank":7480,
        "rankChange": "+738",
        "rating": 90,
        "imdbRating": 8.2,
        "imdbVotes": "97k",
        "backdropImage": "https://images.justwatch.com/backdrop/257952226/s1440/frasier.webp/frasier.webp",
        "posterImage": "https://images.justwatch.com/poster/88176663/s166/frasier.webp",
        "duration": "  25min",
        "highestRank": 1,
        "top10Days": 24,
        "top100Days":45,
        "top1000Days": 1385,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "4.8",
        "dislikes": "481",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist"
      },
      
      {
        "id":66,
        "title": "Saripodhaa Sanivaaram",
        "year": 2024,
        "rank":4,
        "rankChange": "+9",
        "rating": 45,
        "imdbRating": 7.2,
        "imdbVotes": "4.6k",
        "backdropImage": "https://images.justwatch.com/backdrop/319530142/s1440/saripodhaa-sanivaaram.webp/saripodhaa-sanivaaram.webp",
        "posterImage": "https://images.justwatch.com/poster/320935308/s166/saripodhaa-sanivaaram.webp",
        "duration": "  2h 50min",
        "highestRank": 2,
        "top10Days": 8,
        "top100Days":17,
        "top1000Days": 34,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "39",
        "dislikes": "30",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist",
        "videoId": "M7lc1UVf-VE"
      },
      {
        "id":67,
        "title": "The Greatest of All Time",
        "year": 2024,
        "rank":1,
        "rankChange": "+9",
        "rating": 37,
        "imdbRating": 6.6,
        "imdbVotes": "14k",
        "backdropImage": "https://images.justwatch.com/backdrop/320516448/s1440/thalapathy-68.webp/thalapathy-68.webp",
        "posterImage": "https://images.justwatch.com/poster/319972217/s166/thalapathy-68.webp",
        "duration": "  3h 3min",
        "highestRank": 1,
        "top10Days": 5,
        "top100Days":29,
        "top1000Days": 31,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "20",
        "dislikes": "18",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist",
        "videoId": "tb37SwBvRoQ"
      },
      {
        "id":68,
        "title": "GHOSTBUSTERS",
        "year": 2016,
        "rank":149,
        "rankChange": "+610",
        "rating": 59,
        "imdbRating": 6.8,
        "imdbVotes": "250k",
        "backdropImage": "https://images.justwatch.com/backdrop/178693367/s1440/ghostbusters.webp/ghostbusters.webp",
        "posterImage": "https://images.justwatch.com/poster/920179/s166/ghostbusters.webp",
        "duration": "  1h 57min",
        "highestRank": 1,
        "top10Days": 20,
        "top100Days":121,
        "top1000Days": 921,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "5.6",
        "dislikes": "3.7",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist",
        "videoId": "M7lc1UVf-VE"
      },
      {
        "id":69,
        "title": "Double Ismart",
        "year": 2024,
        "rank":39,
        "rankChange": "+31",
        "rating": 25,
        "imdbRating": 2.9,
        "imdbVotes": "1.5k",
        "backdropImage": "https://images.justwatch.com/backdrop/319810520/s1440/double-ismart.webp/double-ismart.webp",
        "posterImage": "https://images.justwatch.com/poster/318607916/s166/double-ismart.webp",
        "duration": "  2h 36min",
        "highestRank": 1,
        "top10Days": 7,
        "top100Days":34,
        "top1000Days": 53,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "20",
        "dislikes": "34",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist",
        "videoId": "OOhbzK-BBnc"
      },
      {
        "id":70,
        "title": "Salaar",
        "year": 2023,
        "rank":21,
        "rankChange": "+347",
        "rating": 64,
        "imdbRating": 6.6,
        "imdbVotes": "70k",
        "backdropImage": "https://images.justwatch.com/backdrop/310502802/s1440/salaar.webp/salaar.webp",
        "posterImage": "https://images.justwatch.com/poster/310502799/s166/salaar.webp",
        "duration": "  2h 55min",
        "highestRank": 1,
        "top10Days": 76,
        "top100Days":249,
        "top1000Days": 311,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "371",
        "dislikes": "175",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist",
        "videoId": "M7lc1UVf-VE"
      },
      
      {
 
        "id":71,
        "title": "Aavesham",
        "year": 2024,
        "rank":43,
        "rankChange": "+32",
        "rating": 82,
        "imdbRating": 7.8,
        "imdbVotes": "21k",
        "backdropImage": "https://images.justwatch.com/backdrop/313630178/s1440/aavesham-2024.webp/aavesham-2024.webp",
        "posterImage": "https://images.justwatch.com/poster/318152051/s166/aavesham-2024.webp",
        "duration": "  2h 38min",
        "highestRank": 1,
        "top10Days": 68,
        "top100Days":160,
        "top1000Days": 177,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "288",
        "dislikes": "48",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist",
        "videoId": "UttccYQXpTM"
      },
      {
 
        "id":72,
        "title": "Bhediya",
        "year": 2022,
        "rank":64,
        "rankChange": "+79",
        "rating": 81,
        "imdbRating": 6.7,
        "imdbVotes": "26k",
        "backdropImage": "https://images.justwatch.com/backdrop/301523379/s1440/bhediya.webp/bhediya.webp",
        "posterImage": "https://images.justwatch.com/poster/310328164/s166/bhediya.webp",
        "duration": "  2h 36min",
        "highestRank": 1,
        "top10Days": 179,
        "top100Days":319,
        "top1000Days": 673,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "625",
        "dislikes": "122",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist",
        "videoId": "M7lc1UVf-VE"
      },
      {
 
        "id":73,
        "title": "Ulajh",
        "year": 2024,
        "rank":8,
        "rankChange": "+4",
        "rating": 20,
        "imdbRating": 6.7,
        "imdbVotes": "21k",
        "backdropImage": "https://images.justwatch.com/backdrop/321200667/s1440/ulajh.webp/ulajh.webp",
        "posterImage": "https://images.justwatch.com/poster/316689716/s166/ulajh.webp",
        "duration": "  2h 14min",
        "highestRank": 2,
        "top10Days": 5,
        "top100Days":10,
        "top1000Days": 51,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "13",
        "dislikes": "28",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist",
        "videoId": "Tk1EQD7vGiY"
      },

      {
 
        "id":74,
        "title": "Rathnam",
        "year": 2024,
        "rank":30,
        "rankChange": "+33",
        "rating": 33,
        "imdbRating": 5.4,
        "imdbVotes": "3.4k",
        "backdropImage": "https://images.justwatch.com/backdrop/316453487/s1440/rathnam.webp/rathnam.webp",
        "posterImage": "https://images.justwatch.com/poster/316453480/s166/rathnam.webp",
        "duration": "  2h 39min",
        "highestRank": 4,
        "top10Days": 5,
        "top100Days":27,
        "top1000Days": 101,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "16",
        "dislikes": "17",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist",
        "videoId": "eeZAC976hjw"
      },
      
      {
 
        "id":75,
        "title": "Manjummel Boys",
        "year": 2024,
        "rank":460,
        "rankChange": "+461",
        "rating": 89,
        "imdbRating": 8.3,
        "imdbVotes": "2.2k",
        "backdropImage": "https://images.justwatch.com/backdrop/311759378/s1440/manjummel-boys.webp/manjummel-boys.webp",
        "posterImage": "https://images.justwatch.com/poster/316584087/s166/manjummel-boys.webp",
        "duration": "  2h 15min",
        "highestRank": 1,
        "top10Days": 54,
        "top100Days":167,
        "top1000Days": 225,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "275",
        "dislikes": "21",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist",
        "videoId": "rqBuKT_8dMY"
      },
      {
 
        "id":76,
        "title": "12th Fail",
        "year": 2023,
        "rank":83,
        "rankChange": "+78",
        "rating": 83,
        "imdbRating": 8.8,
        "imdbVotes": "130k",
        "backdropImage": "https://images.justwatch.com/backdrop/312357660/s1440/12th-fail.webp/12th-fail.webp",
        "posterImage": "https://images.justwatch.com/poster/309089240/s166/12th-fail.webp",
        "duration": "  2h 28min",
        "highestRank": 1,
        "top10Days": 127,
        "top100Days":264,
        "top1000Days": 346,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "869",
        "dislikes": "147",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist",
        "videoId": "WeMJo701mvQ"
      },
      {
 
        "id":77,
        "title": "Bhimaa",
        "year": 2024,
        "rank":235,
        "rankChange": "+20",
        "rating": 5.2,
        "imdbRating": 986,
        "imdbVotes": "87k",
        "backdropImage": "https://images.justwatch.com/backdrop/315907160/s1440/bhimaa.webp/bhimaa.webp",
        "posterImage": "https://images.justwatch.com/poster/315774196/s166/bhimaa.webp",
        "duration": "2h 21min",
        "highestRank": 18,
        "top10Days": 0,
        "top100Days":16,
        "top1000Days": 131,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "1",
        "dislikes": "1",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist",
        "videoId": "P3t--CmbibE"
      },
      {
 
        "id":78,
        "title": "Pushpa: The Rise",
        "year": 2021,
        "rank":1397,
        "rankChange": "+411",
        "rating": 82,
        "imdbRating": 7.6,
        "imdbVotes": "90k",
        "backdropImage": "https://images.justwatch.com/backdrop/257781354/s1440/pushpa.webp/pushpa.webp",
        "posterImage": "https://images.justwatch.com/poster/257836274/s166/pushpa.webp",
        "duration": "2h 59min",
        "highestRank": 1,
        "top10Days": 127,
        "top100Days":622,
        "top1000Days": 1088,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "2.6",
        "dislikes": "537",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist",
        "videoId": "pKctjlxbFDQ"
      },
      {
 
        "id":79,
        "title": "The Family Star",
        "year": 2024,
        "rank":1123,
        "rankChange": "+476",
        "rating": 37,
        "imdbRating": 5.3,
        "imdbVotes": "4.8k",
        "backdropImage": "https://images.justwatch.com/backdrop/316435293/s1440/family-star.webp/family-star.webp",
        "posterImage": "https://images.justwatch.com/poster/321210274/s166/family-star.webp",
        "duration": "2h 39min",
        "highestRank": 1,
        "top10Days": 50,
        "top100Days":118,
        "top1000Days": 190,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "69",
        "dislikes": "87",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist",
        "videoId": "M7lc1UVf-VE"
      },
      {
 
        "id":80,
        "title": "Rockstar",
        "year": 2011,
        "rank":670,
        "rankChange": "+659",
        "rating": 86,
        "imdbRating": 7.8,
        "imdbVotes": "51k",
        "backdropImage": "https://images.justwatch.com/backdrop/244145151/s1440/rockstar.webp/rockstar.webp",
        "posterImage": "https://images.justwatch.com/poster/240985408/s166/rockstar.webp",
        "duration": "2h 39min",
        "highestRank": 4,
        "top10Days": 11,
        "top100Days":580,
        "top1000Days": 2344,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "481",
        "dislikes": "61",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist",
        "videoId": "bD5FShPZdpw"
      },
      {
 
        "id":81,
        "title": "The Fall Guy",
        "year": 2024,
        "rank":53,
        "rankChange": "+29",
        "rating": 88,
        "imdbRating": 6.9,
        "imdbVotes": "158k",
        "backdropImage": "https://images.justwatch.com/backdrop/312569653/s1440/the-fall-guy.webp/the-fall-guy.webp",
        "posterImage": "https://images.justwatch.com/poster/313201926/s166/the-fall-guy.webp",
        "duration": "2h 39min",
        "highestRank": 1,
        "top10Days": 16,
        "top100Days":146,
        "top1000Days": 217,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "4.4k",
        "dislikes": "578",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist",
        "videoId": "M7lc1UVf-VE"
      },
      {
 
        "id":82,
        "title": "Chandu Champion",
        "year": 2024,
        "rank":688,
        "rankChange": "+600",
        "rating": 71,
        "imdbRating": 7.9,
        "imdbVotes": "2m",
        "backdropImage": "https://images.justwatch.com/backdrop/319469589/s1440/chandu-champion.webp/chandu-champion.webp",
        "posterImage": "https://images.justwatch.com/poster/123221980/s166/joker-2019.webp",
        "duration": "2h 2min",
        "highestRank": 2,
        "top10Days": 13,
        "top100Days":666,
        "top1000Days": 113,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "96",
        "dislikes": "26",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist",
        "video": "IHQQK_Wn5DM"
      },
      {
 
        "id":83,
        "title": "Joker",
        "year": 2019,
        "rank":25,
        "rankChange": "+17",
        "rating": 94,
        "imdbRating": 8.4,
        "imdbVotes": "31k",
        "backdropImage": "https://images.justwatch.com/backdrop/147680055/s1440/joker-2019.webp/joker-2019.webp",
        "posterImage": "https://images.justwatch.com/poster/123221980/s166/joker-2019.webp",
        "duration": "2h 2min",
        "highestRank": 1,
        "top10Days": 138,
        "top100Days":511,
        "top1000Days": 1853,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "56k",
        "dislikes": "3.7k",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist",
        "videoId": "M7lc1UVf-VE"
      },
      {
 
        "id":84,
        "title": "John Wick",
        "year": 2014,
        "rank":295,
        "rankChange": "+184",
        "rating": 96,
        "imdbRating": 7.4,
        "imdbVotes": "755k",
        "backdropImage": "https://images.justwatch.com/backdrop/8697369/s1440/john-wick.webp/john-wick.webp",
        "posterImage": "",
        "duration": "1h 54min",
        "highestRank": 1,
        "top10Days": 91,
        "top100Days":1532,
        "top1000Days": 3198,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "47k",
        "dislikes": "1.6k",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist",
        "videoId": "C0BMx-qxsP4"
      },
      
      {
 
        "id":85,
        "title": "777 Charlie",
        "year": 2022,
        "rank":108,
        "rankChange": "+63",
        "rating": 83,
        "imdbRating": 8.7,
        "imdbVotes": "11k",
        "backdropImage": "https://images.justwatch.com/backdrop/279111882/s1440/777-charlie.webp/777-charlie.webp",
        "posterImage": "https://images.justwatch.com/poster/279168181/s166/777-charlie.webp",
        "duration": "2h 46min",
        "highestRank": 2,
        "top10Days": 102,
        "top100Days":563,
        "top1000Days": 855,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "523",
        "dislikes": "85",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist",
        "videoId": "M7lc1UVf-VE"
      },
      {
 
        "id":86,
        "title": "Jailer",
        "year": 2023,
        "rank":4010,
        "rankChange": "+3432",
        "rating": 74,
        "imdbRating": 7.7,
        "imdbVotes": "9k",
        "backdropImage": "https://images.justwatch.com/backdrop/302068761/s1440/jailer.webp/jailer.webp",
        "posterImage": "https://images.justwatch.com/poster/306896776/s166/jailer.webp",
        "duration": "2h 45min",
        "highestRank": 2,
        "top10Days": 28,
        "top100Days":131,
        "top1000Days": 404,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "404",
        "dislikes": "117",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist",
        "videoId":"xenOE1Tma0A"
      },
      {
 
        "id":87,
        "title": "Drishyam 2",
        "year": 2022,
        "rank":511,
        "rankChange": "-41",
        "rating": 80,
        "imdbRating": 8.2,
        "imdbVotes": "46k",
        "backdropImage": "https://images.justwatch.com/backdrop/302032241/s1440/drishyam-2-2022.webp/drishyam-2-2022.webp",
        "posterImage": "https://images.justwatch.com/poster/302274607/s166/drishyam-2-2022.webp",
        "duration": "2h 20min",
        "highestRank": 1,
        "top10Days": 44,
        "top100Days":142,
        "top1000Days": 613,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "574",
        "dislikes": "121",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist",
        "videoId": "M7lc1UVf-VE"
      },

      {
 
        "id":88,
        "title": "Leo",
        "year": 2023,
        "rank":381,
        "rankChange": "+243",
        "rating": 68,
        "imdbRating": 7.2,
        "imdbVotes": "63k",
        "backdropImage": "https://images.justwatch.com/backdrop/309143388/s1440/leo-2023.webp/leo-2023.webp",
        "posterImage": "https://images.justwatch.com/poster/302774727/s166/leo-2023.webp",
        "duration": "2h 43min",
        "highestRank": 1,
        "top10Days": 57,
        "top100Days":125,
        "top1000Days": 358,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "369",
        "dislikes": "143",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist",
        "videoId": "Po3jStA673E"
      },
      {
 
        "id":89,
        "title": "Kakuda",
        "year": 2024,
        "rank":290,
        "rankChange": "+899",
        "rating": 43,
        "imdbRating": 6.4,
        "imdbVotes": "6.9k",
        "backdropImage": "https://images.justwatch.com/backdrop/319553669/s1440/kakuda.webp/kakuda.webp",
        "posterImage": "https://images.justwatch.com/poster/318832225/s166/kakuda.webp",
        "duration": "2h 57min",
        "highestRank": 29,
        "top10Days": 0,
        "top100Days":9,
        "top1000Days": 82,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "19",
        "dislikes": "11",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist",
        "videoId": "M7lc1UVf-VE"
      },

      {
 
        "id":90,
        "title": "Rudra: The Edge of Darkness",
        "year": 2022,
        "rank":541,
        "rankChange": "+87",
        "rating": 75,
        "imdbRating": 6.7,
        "imdbVotes": "8.9k",
        "backdropImage": "https://images.justwatch.com/backdrop/266486963/s1440/rudra-the-edge-of-darkness.webp/rudra-the-edge-of-darkness.webp",
        "posterImage": "https://images.justwatch.com/poster/295564335/s166/rudra-the-edge-of-darkness.webp",
        "duration": "53min",
        "highestRank": 2,
        "top10Days": 17,
        "top100Days":87,
        "top1000Days": 917,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "144",
        "dislikes": "33",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist",
        "videoId": "FyuODiTjoFs"
      },

      {
 
        "id":91,
        "title": "Teri Baaton Mein Aisa Uljha Jiya",
        "year": 2024,
        "rank":1243,
        "rankChange": "+146",
        "rating": 63,
        "imdbRating": 6.3,
        "imdbVotes": "5.2k",
        "backdropImage": "https://images.justwatch.com/backdrop/308601827/s1440/untitled-shahid-kapoor-kriti-sanon-film.webp/untitled-shahid-kapoor-kriti-sanon-film.webp",
        "posterImage": "https://images.justwatch.com/poster/313121131/s166/untitled-shahid-kapoor-kriti-sanon-film.webp",
        "duration": "2h 21min",
        "highestRank": 1,
        "top10Days": 38,
        "top100Days":122,
        "top1000Days": 239,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "142",
        "dislikes": "62",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist",
        "videoId": "M7lc1UVf-VE"
      },
      
      {
 
        "id":92,
        "title": "Train to Busan",
        "year": 2016,
        "rank":409,
        "rankChange": "+213",
        "rating": 95,
        "imdbRating": 7.6,
        "imdbVotes": "269k",
        "backdropImage": "https://images.justwatch.com/backdrop/8836855/s1440/train-to-busan.webp/train-to-busan.webp",
        "posterImage": "https://images.justwatch.com/poster/159340597/s166/train-to-busan.webp",
        "duration": "1h 58min",
        "highestRank": 1,
        "top10Days": 12,
        "top100Days":205,
        "top1000Days": 2454,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "17k",
        "dislikes": "878",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist",
        "videoId": "1ovgxN2VWNc"
      },
      {
 
        "id":93,
        "title": "Yodha",
        "year": 2024,
        "rank":1402,
        "rankChange": "+152",
        "rating": 55,
        "imdbRating": 5.7,
        "imdbVotes": "8.4k",
        "backdropImage": "https://images.justwatch.com/backdrop/312812342/s1440/yodha-2022.webp/yodha-2022.webp",
        "posterImage": "https://images.justwatch.com/poster/255942569/s166/yodha-2022.webp",
        "duration": "2h 11min",
        "highestRank": 3,
        "top10Days": 13,
        "top100Days":67,
        "top1000Days": 202,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "60",
        "dislikes": "32",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist",
        "videoId": "M7lc1UVf-VE"
      },

      {
 
        "id":94,
        "title": "Shaitaan ",
        "year": 2024,
        "rank":522,
        "rankChange": "+670",
        "rating": 53,
        "imdbRating": 6.6,
        "imdbVotes": "5.1k",
        "backdropImage": "https://images.justwatch.com/backdrop/315476071/s1440/black-magic-2024.webp/black-magic-2024.webp",
        "posterImage": "https://images.justwatch.com/poster/311364627/s166/black-magic-2024.webp",
        "duration": "2h 12min",
        "highestRank": 1,
        "top10Days": 17,
        "top100Days":105,
        "top1000Days": 209,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "171",
        "dislikes": "122",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist",
        "videoId": "jLshY-zUfZ4"
      },
      
      {
 
        "id":95,
        "title": "Bhool Bhulaiyaa 2",
        "year": 2022,
        "rank":407,
        "rankChange": "+9",
        "rating": 56,
        "imdbRating": 5.7,
        "imdbVotes": "33k",
        "backdropImage": "https://images.justwatch.com/backdrop/290417264/s1440/bhool-bhulaiyaa-2.webp/bhool-bhulaiyaa-2.webp",
        "posterImage": "https://images.justwatch.com/poster/272492185/s166/bhool-bhulaiyaa-2.webp",
        "duration": "2h 22min",
        "highestRank": 1,
        "top10Days": 22,
        "top100Days":113,
        "top1000Days": 472,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "321",
        "dislikes": "210",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist",
        "videoId": "M7lc1UVf-VE"
      },
      {
 
        "id":96,
        "title": "Maaveeran",
        "year":2023 ,
        "rank":1046,
        "rankChange": "+335",
        "rating": 64,
        "imdbRating": 7.4,
        "imdbVotes": "9.8k",
        "backdropImage": "https://images.justwatch.com/backdrop/305932344/s1440/maaveeran-2023.webp/maaveeran-2023.webp",
        "posterImage": "https://images.justwatch.com/poster/305932340/s166/maaveeran-2023.webp",
        "duration": "2h 46min",
        "highestRank": 2,
        "top10Days": 6,
        "top100Days":48,
        "top1000Days": 217,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "148",
        "dislikes": "62",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist",
        "videoId": "EcNACt-LOi0",
      
      },

      {
 
        "id":97,
        "title": "Guns & Gulaabs",
        "year":2023 ,
        "rank":980,
        "rankChange": "+217",
        "rating": 63,
        "imdbRating": 7.7,
        "imdbVotes": "18k",
        "backdropImage": "https://images.justwatch.com/backdrop/307266837/s1440/guns-and-gulaabs.webp/guns-and-gulaabs.webp",
        "posterImage": "https://images.justwatch.com/poster/320955430/s166/guns-and-gulaabs.webp",
        "duration": "53min",
        "highestRank": 1,
        "top10Days": 21,
        "top100Days":66,
        "top1000Days": 360,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "225",
        "dislikes": "109",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist",
        "videoId": "pgEiBaF2mHA"
      },

      
      {
 
        "id":98,
        "title": "The Kerala Story",
        "year":2023,
        "rank":702,
        "rankChange": "+2974",
        "rating": 79,
        "imdbRating": 6.1,
        "imdbVotes": "73k",
        "backdropImage": "https://images.justwatch.com/backdrop/305317096/s1440/the-kerala-story.webp/the-kerala-story.webp",
        "posterImage": "https://images.justwatch.com/poster/305224207/s166/the-kerala-story.webp",
        "duration": "2h 18min",
        "highestRank": 1,
        "top10Days": 158,
        "top100Days":353,
        "top1000Days": 513,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "470",
        "dislikes": "160",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist",
         "videoId": "hM12KxC3ONA"
      },
      
      {
 
        "id":99,
        "title": "Shershaah",
        "year":2021,
        "rank":421,
        "rankChange": "+461",
        "rating": 71,
        "imdbRating": 8.3,
        "imdbVotes": "131k",
        "backdropImage": "https://images.justwatch.com/backdrop/253243045/s1440/shershaah.webp/shershaah.webp",
        "posterImage": "https://images.justwatch.com/poster/248507471/s166/shershaah.webp",
        "duration": "2h 15min",
        "highestRank": 1,
        "top10Days": 28,
        "top100Days":136,
        "top1000Days": 1009,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "1k",
        "dislikes": "378",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist",
        "videoId": "Q0FTXnefVBA"
      },

      
      {
 
        "id":100,
        "title": "The Hangover",
        "year":2009,
        "rank":230,
        "rankChange": "+116",
        "rating": 94,
        "imdbRating": 7.7,
        "imdbVotes": "862k",
        "backdropImage": "https://images.justwatch.com/backdrop/248554430/s1440/the-hangover.webp/the-hangover.webp",
        "posterImage": "https://images.justwatch.com/poster/8730490/s166/the-hangover.webp",
        "duration": "1h 40min",
        "highestRank": 17,
        "top10Days": 0,
        "top100Days":34,
        "top1000Days": 2025,
        "watchOptions": [
          {"platform": "Netflix", "price": "Rs200/-"},
          {"platform": "Amazon Prime", "price": "Rs500/-"}
        ],
        "likes": "26k",
        "dislikes": "1.5k",
        "watchlistText": "Watchlist",
        "seenText": "Seen",
        "syncText": "Sign in to Sync Watchlist",
        "videoId": "tlize92ffnY"
      },
    
    
    
    ];


app.get("/api/New-movies", (req, res) => {
    const titleQuery = req.query.title ? req.query.title.toLowerCase() : null;

    if (titleQuery) {
        const moviesByTitle = myMovies.find(movie => movie.title.toLowerCase() === titleQuery);

        if (moviesByTitle) {
            return res.json(webpmoviesByTitle);
        } else {
            return res.status(404).json({ message: "Movie not found by title" });
        }
    } else {
        return res.json(myMovies);
    }
});

app.get("/api/New-movies", (req, res) => {
  const titleQuery = req.query.title ? req.query.title.toLowerCase() : null;

  if (titleQuery) {
      const moviesByTitle = myMovies.find(movie => movie.title.toLowerCase() === titleQuery);

      if (moviesByTitle) {
          return res.json(moviesByTitle);
      } else {
          return res.status(404).json({ message: "Movie not found by title" });
      }
  } else {
      return res.json(myMovies);
  }
});

app.get("/api/New-movies/:id", (req, res) => {
  const id = req.params.id;
  const movie = myMovies.find(movie => movie.id === parseInt(id));

  if (!movie) {
      return res.status(404).json({ message: "Movie not found re baba" });
  }
  res.json(movie);
});

app.post("/api/myMovies", (req, res) => {
  let newMovie = { ...req.body, id: myMovies.length + 1 };
  myMovies.push(newMovie);

  res.status(201).json(newMovie);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});