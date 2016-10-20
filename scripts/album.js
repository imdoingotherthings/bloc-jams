var getSongNumberCell = function (number) {
  return $('.song-item-number[data-song-number="' + number + '"]');
};

var createSongRow = function (songNumber, songName, songLength) {
  var template = 
    '<tr class="album-view-song-item">'
    + '  <td class="song-item-number" data-song-number="' + songNumber + '">' + songNumber + '</td>'
    + '  <td class="song-item-title">' + songName + '</td>'
    + '  <td class="song-item-duration">' + songLength + '</td>'
    + '</tr>'
    ;
 
  var $row = $(template);
    var clickHandler = function() {
    var songNumber = parseInt($(this).attr('.data-song-number'));
      if (currentlyPlayingSongNumber !== null) {
	var currentlyPlayingCell = getSongNumberCell(currentlyPlayingSongNumber);
	currentlyPlayingCell.html(currentlyPlayingSongNumber);
      }
      if (currentlyPlayingSongNumber !== songNumber){
	$(this).html(pauseButtonTemplate);
	setSong(songNumber);
        currentSoundFile.play();
	currentSongFromAlbum = currentAlbum.songs[songNumber - 1];
	updatePlayerBarSong();
      } else if (currentlyPlayingSongNumber === songNumber) {
	if (currentSoundFile.isPaused()) {
	$(this).html(pauseButtonTemplate);
	$('.main-controls .play-pause').html(playerBarPauseButton);
	currentSoundFile.play();
      } else {
	$(this).html(playButtonTemplate);
	$('.main-controls .play-pause').html(playerBarPlayButton);
	currentSoundFile.pause();
	}
    }
};
	
<<<<<<< HEAD
<<<<<<< HEAD
		var clickHandler = function() {
			var songNumber = parseInt($(this).attr('.data-song-number'));
			
			if (currentlyPlayingSongNumber !== null) {
				var currentlyPlayingCell = getSongNumberCell(currentlyPlayingSongNumber);
				currentlyPlayingCell.html(currentlyPlayingSongNumber);
=======
<<<<<<< Updated upstream
		var clickHandler = function () {
			var songNumber = parseInt($(this).attr('.data-song-number'));
			
			if (setSong !== null) {
				// Revert to song number for currently playing song because user started playing new song 
				var currentlyPlayingCell = getSongNumberCell(setSong);
				currentlyPlayingCell.html(setSong);
=======
		var clickHandler = function() {
			var songNumber = parseInt($(this).attr('data-song-number'));
			if (currentlyPlayingSongNumber !== null) {
				var currentlyPlayingCell = getSongNumberCell(currentlyPlayingSongNumber);
				currentlyPlayingCell.html(currentlyPlayingSongNumber);
>>>>>>> Stashed changes
>>>>>>> 6546fc56c1838c9623a6d56be70879ee077ad231
			}
			
			if (currentlyPlayingSongNumber !== songNumber){
				$(this).html(pauseButtonTemplate);
				setSong(songNumber);
				currentSoundFile.play();
				currentSongFromAlbum = currentAlbum.songs[songNumber - 1];
				updatePlayerBarSong();
			} else if (currentlyPlayingSongNumber === songNumber) {
				if (currentSoundFile.isPaused()) {
					$(this).html(pauseButtonTemplate);
					$('.main-controls .play-pause').html(playerBarPauseButton);
					currentSoundFile.play();
				} else {
					$(this).html(playButtonTemplate);
					$('.main-controls .play-pause').html(playerBarPlayButton);
					currentSoundFile.pause();
				}
			}
		};
	
		var onHover = function (event){
			var songNumberCell = $(this).find('.song-item-number');
			var songNumber = parseInt(songNumberCell.attr('data-song-number'));
			
			if (songNumber !== currentlyPlayingSongNumber){
				songNumberCell.html(playButtonTemplate);
			}
		};
		var offHover = function (event){
			var songNumberCell = $(this).find('.song-item-number');
			var songNumber = parseInt(songNumberCell.attr('data-song-number'));
=======
var onHover = function (event){
  var songNumberCell = $(this).find('.song-item-number');
  var songNumber = parseInt(songNumberCell.attr('data-song-number'));
			
  if (songNumber !== currentlyPlayingSongNumber){
    songNumberCell.html(playButtonTemplate);
  }
};

var offHover = function (event){
  var songNumberCell = $(this).find('.song-item-number');
  var songNumber = parseInt(songNumberCell.attr('data-song-number'));
>>>>>>> e6e056174c6d7cc66d6ace974b01403429ea8219
			
  if (songNumber !== currentlyPlayingSongNumber) {
    songNumberCell.html(songNumber);
  }
};
	
  $row.find('.song-item-number').click(clickHandler);
  $row.hover(onHover, offHover);
  return $row;
};

// Select elements that we want to populate with text dynamically 
var $albumTitle = $('.album-view-title');
var $albumArtist = $('.album-view-artist');
var $albumReleaseInfo = $('.album-view-release-info');
var $albumImage = $('.album-cover-art');
var $albumSongList = $('.album-view-song-list');
 
var setCurrentAlbum = function (album) {
    // Assign values to each part of the album (text, images)
  currentAlbum = album;
	
  var $albumTitle = $('.album-view-title');
  var $albumArtist = $('.album-view-artist');
  var $albumReleaseInfo = $('.album-view-release-info');
  var $albumImage = $('.album-cover-art');
  var $albumSongList = $('.album-view-song-list');
	
  $albumTitle.text(album.title);
  $albumArtist.text(album.artist);
  $albumReleaseInfo.text(album.year + ' ' + album.label);
  $albumImage.attr('src', album.albumArtUrl);
 
    // Clear contents of album song list container
  $albumSongList.empty();

    // Build list of songs from album JavaScript object
  for (var i = 0; i < album.songs.length; i++) {
    var $newRow = createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
      $albumSongList.append($newRow);
  }
};

var trackIndex = function(album, song) {
  return album.songs.indexOf(song);
};

<<<<<<< HEAD
=======
<<<<<<< Updated upstream
=======
>>>>>>> 6546fc56c1838c9623a6d56be70879ee077ad231
var setSong = function(songNumber) {
<<<<<<< HEAD
	if (currentSoundFile) {
		currentSoundFile.stop();
	}
	
	currentlyPlayingSongNumber = parseInt(songNumber) ;
<<<<<<< HEAD
	currentSongFromAlbum = currentAlbum.songs[songNumber - 1];
=======
//	console.log(songNumber)
	currentSongFromAlbum = currentAlbum.songs[songNumber - 1]; //undefined
>>>>>>> 6546fc56c1838c9623a6d56be70879ee077ad231
	
	// setting the format of the song, using currentSongFromAlbum to grab the song
	currentSoundFile = new buzz.sound(currentSongFromAlbum.audioUrl, {
		formats: [ 'mp3' ], 
		preload: true	
	});
	setVolume(currentVolume);
=======
  if (currentSoundFile) {
    currentSoundFile.stop();
  }
	
  currentlyPlayingSongNumber = parseInt(songNumber) ;
  currentSongFromAlbum = currentAlbum.songs[songNumber - 1];
	
  // setting the format of the song, using currentSongFromAlbum to grab the song
  currentSoundFile = new buzz.sound(currentSongFromAlbum.audioUrl, {
    formats: [ 'mp3' ], 
    preload: true	
  });
 setVolume(currentVolume);
>>>>>>> e6e056174c6d7cc66d6ace974b01403429ea8219
};

<<<<<<< HEAD
=======
>>>>>>> Stashed changes
>>>>>>> 6546fc56c1838c9623a6d56be70879ee077ad231
// nextSong function is itterating through the current playing song and updating the bar to the current song 
var nextSong = function() {
  var getLastSongNumber = function(index) {
    return index == 0 ? currentAlbum.songs.length : index; 
  };
	
  var currentSongIndex = trackIndex(currentAlbum, currentSongFromAlbum);
  currentSongIndex++;
	
  if (currentSongIndex >= currentAlbum.songs.length) {
    currentSongIndex = 0;
  }
	
  setSong(currentSongIndex + 1);
  currentSoundFile.play();
  updatePlayerBarSong();
  currentSongFromAlbum = currentAlbum.songs[currentSongIndex];
	
  $('.currently-playing .song-name').text(currentSongFromAlbum.title);
  $('.currently-playing .artist-name').text(currentAlbum.artist);
  $('.currently-playing .artist-song-mobile').text(currentSongFromAlbum.title + " - " + currentAlbum.title);
  $('.main-controls .play-pause').html(playerBarPauseButton);
	
  var lastSongNumber = getLastSongNumber(currentSongIndex);
  var $nextSongNumberCell = getSongNumberCell(currentlyPlayingSongNumber);
  var $lastSongNumberCell = getSongNumberCell(lastSongNumber);
	
  $nextSongNumberCell.html(pauseButtonTemplate);
  $lastSongNumberCell.html(lastSongNumber);
	
};

var previousSong = function () {
  var getLastSongNumber = function (index) {
    return index == (currentAlbum.songs.length -1) ? 1 : index + 2;
  };
	
  var currentSongIndex = trackIndex(currentAlbum, currentSongFromAlbum);
  currentSongIndex--;
	
  if (currentSongIndex < 0) {
    currentSongIndex = currentAlbum.songs.length - 1;
  }
	
  setSong(currentSongIndex + 1);
  currentSoundFile.play();
  updatePlayerBarSong();
  currentSongFromAlbum = currentAlbum.songs[currentSongIndex];
	
  $('.currently-playing .song-name').text(currentSongFromAlbum.title);
  $('.currently-playing .artist-name').text(currentAlbum.artist);
  $('.currently-playing .artist-song-mobile').text(currentSongFromAlbum + " - " + currentAlbum.title);
  $('.main-controls .play-pause').html(playerBarPauseButton);
	
  var lastSongNumber = getLastSongNumber(currentSongIndex);
  var $previousSongNumberCell = getSongNumberCell(currentlyPlayingSongNumber);
  var $lastSongNumberCell = getSongNumberCell(lastSongNumber);
	
  $previousSongNumberCell.html(pauseButtonTemplate);
  $lastSongNumberCell.html(lastSongNumber);
};

var updatePlayerBarSong = function () {
  $('.currently-playing .song-name').text(currentSongFromAlbum.title);
  $('.currently-playing .artist-name').text(currentAlbum.artist);
  $('.currently-playing .artist-song-mobile').text(currentSongFromAlbum.title + " - " + currentAlbum.artist);
	
  $('.main-controls .play-pause').html(playerBarPauseButton);	
};

var setVolume = function (volume) {
  if (currentSoundFile) {
    currentSoundFile.setVolume(volume);
  }
};

// Album button templates 
var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';
var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>';
var playerBarPlayButton = '<span class="ion-play"></span>';
var playerBarPauseButton = '<span class="ion-pause"></span>';

// Store current playing song
var currentAlbum = null;
var currentlyPlayingSongNumber = null;
var currentSongFromAlbum = null;
var currentSoundFile = null;
var currentVolume = 80;

var $previousButton = $('.main-controls .previous');
var $nextButton = $('.main-controls .next');

$(document).ready(function () {
  setCurrentAlbum(albumPicasso);
  $previousButton.click(previousSong);
  $nextButton.click(nextSong);
});
