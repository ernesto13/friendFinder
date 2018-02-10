// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendArray = [{
        "name": "John",
        "photo": "http://img.etonline.com/1242911076001/201610/778/1242911076001_5188129120001_et-johnmayerbae-102716-hulu.jpg?pubId=1242911076001",
        "scores": [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    },

    {
        "name": "Snoop",
        "photo": "https://www.biography.com/.image/t_share/MTQ3NjM5ODIyNjU0MTIxMDM0/snoop_dogg_photo_by_estevan_oriol_archive_photos_getty_455616412.jpg",
        "scores": [
            3, 2, 6, 4, 5, 1, 2, 5, 4, 1
        ]
    },


    {
        "name": "Taylor",
        "photo": "https://pixel.nymag.com/imgs/daily/vulture/2017/11/09/09-taylor-swift-ranking-feature.nocrop.w1600.h2147483647.jpg",
        "scores": [
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1
        ]
    },

    {
        "name": "Taylor",
        "photo": "https://pixel.nymag.com/imgs/daily/vulture/2017/11/09/09-taylor-swift-ranking-feature.nocrop.w1600.h2147483647.jpg",
        "scores": [
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1
        ]
    }







];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendArray;