function printSongs(input) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }
    const n = Number(input[0]);
    const typeListFilter = input[n + 1];

    const songs = [];

    // Parse the input and create Song objects
    for (let i = 1; i <= n; i++) {
        const [typeList, name, time] = input[i].split('_');
        songs.push(new Song(typeList, name, time));
    }

    // Filter and print the names based on the typeList
    if (typeListFilter === 'all') {
        songs.forEach(song => console.log(song.name));
    } else {
        songs
            .filter(song => song.typeList === typeListFilter)
            .forEach(song => console.log(song.name));
    }
}

printSongs([4,

    'favourite_DownTown_3:14',
    
    'listenLater_Andalouse_3:24',
    
    'favourite_In To The Night_3:58',
    
    'favourite_Live It Up_3:48',
    
    'listenLater'])