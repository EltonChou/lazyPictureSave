javascript: 
(function (){
	var imageUrl = window.location.href;
	var targetLink = document.createElement('a');
	targetLink.href = imageUrl;

	switch(window.location.hostname){
		case "pbs.twimg.com":
			splitImageUrl = imageUrl.split(':');
			if (splitImageUrl[2] != "orig"){
				targetLink.href = splitImageUrl[0]+":"+splitImageUrl[1]+":orig";
			}
			targetLink.download = splitImageUrl[1].split("/")[4];
			break;

		case "www.pixiv.net":
			switch(imageUrl.split('&')[0]){
				case "https://www.pixiv.net/member_illust.php?mode=manga_big":
					targetLink.href = document.getElementsByTagName("img")[0].src;
					break
				case "https://www.pixiv.net/member_illust.php?mode=medium":
					targetLink.href = document.getElementsByClassName('original-image')[0].getAttribute('data-src');
					break
			}

			var pixivSrcName = targetLink.href.split('/');
			targetLink.download = pixivSrcName[pixivSrcName.length - 1];
			break

		case "exhentai.org":
			targetLink = document.querySelector("#i7 a")
			break

		case "images.plurk.com":
		case "cdn.discordapp.com":
			splitImageUrl = imageUrl.split('/');
			targetLink.download = splitImageUrl[splitImageUrl.length - 1];
			break
	}

	targetLink.click();
})()
