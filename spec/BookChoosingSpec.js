describe("Book Choosing", function() {

  // beforeEach(function() {
    // player = new Player();
  //   song = new Song();
  // });

  var splitBooks = function(isBookWanted, books) {
    var keepList = [];
    books.forEach(function(book) {
      if (isBookWanted(book)) {
        keepList.push(book);   
      // add to keep list[]
      } 
    });
    return keepList;
  }

  var isContemporary = function (book) {
    return book.contemporary;
  }

  var isMargaretAtwood = function (book) {
    return book.author == "Margaret Atwood"
  }

  var book1 = {name: "A", contemporary: true , author: "Margaret Atwood"}
  var book2 = {name: "B", contemporary: false, author: "Octavia Butler"}
  var book3 = {name: "C", contemporary: true , author: "Sarah Hall"}
  var books = [book1, book2, book3]

  it("Can split books", function() {
    expect(splitBooks(isContemporary, books)).toEqual([book1, book3])
    expect(splitBooks(isMargaretAtwood, books)).toEqual([book1])
    // player.play(song);
    // expect(player.currentlyPlayingSong).toEqual(song);

    //demonstrates use of custom matcher
    // expect(player).toBePlaying(song);
  });

  // describe("when song has been paused", function() {
  //   beforeEach(function() {
  //     player.play(song);
  //     player.pause();
  //   });

  //   it("should indicate that the song is currently paused", function() {
  //     expect(player.isPlaying).toBeFalsy();

  //     // demonstrates use of 'not' with a custom matcher
  //     expect(player).not.toBePlaying(song);
  //   });

  //   it("should be possible to resume", function() {
  //     player.resume();
  //     expect(player.isPlaying).toBeTruthy();
  //     expect(player.currentlyPlayingSong).toEqual(song);
  //   });
  // });

  // // demonstrates use of spies to intercept and test method calls
  // it("tells the current song if the user has made it a favorite", function() {
  //   spyOn(song, 'persistFavoriteStatus');

  //   player.play(song);
  //   player.makeFavorite();

  //   expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  // });

  // //demonstrates use of expected exceptions
  // describe("#resume", function() {
  //   it("should throw an exception if song is already playing", function() {
  //     player.play(song);

  //     expect(function() {
  //       player.resume();
  //     }).toThrowError("song is already playing");
  //   });
  // });
});
