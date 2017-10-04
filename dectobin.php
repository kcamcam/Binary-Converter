<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8"/>
  	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
  	<meta name="description" content="A simple binary, hex, or octal to decimal converter."/>
  	<meta name="keywords" content="binary, decimal, octal, hex, hexadecimal, converter, conversion, convert, 1, 0, fib, fibonacci, famingo, kevin, camellini, kevin camellini, developer, software, engineer, software engineer, computer science, comp sci, computer, science"/>
	<title>Binary Converter</title>
	<link rel="icon" type="image/png" href="binary.png"/>
	<!-- jQuery -->
	<script src="https://code.jquery.com/jquery-3.2.1.js" integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE=" crossorigin="anonymous"></script>
	<!-- Tether for bootstrap -->
	<script src="https://npmcdn.com/tether@1.2.4/dist/js/tether.min.js"></script>
	<script src="https://npmcdn.com/bootstrap@4.0.0-alpha.5/dist/js/bootstrap.min.js"></script>
	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
	<!-- Latest compiled and minified JavaScript -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
	<!-- FontAwesome -->
    <script src="https://use.fontawesome.com/e0af25fb51.js"></script>
	<!-- Sweet Alert -->
	<script src="https://cdn.jsdelivr.net/sweetalert2/6.6.2/sweetalert2.min.js"></script>
	<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/sweetalert2/6.6.2/sweetalert2.min.css">
	<!-- Custom CSS -->
	<link rel="stylesheet" type="text/css" href="style13.css"/>
	<!-- Custom Script -->
	<script type="text/javascript" src="script13.js"></script>
	<script>(adsbygoogle = window.adsbygoogle || []).push({ google_ad_client: "ca-pub-3129840300619563", enable_page_level_ads: true});</script>
</head>
<body onload="setYear()">
	<!-- Nav Bar -->
	<ul class="nav nav-tabs">
		<li class="nav-item">
			<a class="nav-link inactive" href="index.php">Binary to Decimal</a>
		</li>
		<li class="nav-item">
			<a class="nav-link active" href="#">Decimal to Binary</a>
		</li>
	</ul>
	<!-- Conent -->
	<div class="container-fluid content">
		<!-- Headrer -->
		<div class="row-fluid text-center">
			<div class="col-12">
				<h1>Decimal Converter</h1>
			</div>
		</div>
		<!-- Input Field -->
		<div class="row-fluid text-center">
			<div class="col-10 offset-1 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-4 offset-lg-4 input-group">
				<div class="input-group-addon" id="addon">10</div>
				<textarea class="form-control text-left autoexpand" name="inputval" id="inputval" type="text" placeholder="1123581321" onkeyup="bazinga();" rows=1; data-min-rows='1'></textarea>
			</div>
		</div>
		<br/>
		<!-- Radio Buttons -->
		<div class="row-fluid text-center">
			<div class="btn-group" role="group" data-toggle="buttons">
				<label class="btn btn-outline-success active" onchange="radioclick();">
					<input type="radio" name="radio" checked value="2" id="radio">Binary
				</label>
				<label class="btn btn-outline-success" onchange="radioclick();">
					<input type="radio" name="radio" value="8" id="radio">Octal
				</label>
				<label class="btn btn-outline-success" onchange="radioclick();">
					<input type="radio" name="radio" value="16" id="radio">Hex
				</label>
			</div>
		</div>
		<!-- Result Field -->
		<div class="row-fluid text-center">
			<div class="col-12">
				<h4 id="result">1000010111110000111110110001001</h4>
			</div>
			<button id="copy" class="btn btn-success" data-toggle="tooltip" data-placement="bottom" title="copied" onclick="copy();">Copy</button>
		</div>
	</div>

    <!-- Footer -->
    <div class="footer text-center">
        <div class="container-fluid">
            <div class="row-fluid social">
                <a href="https://twitter.com/famingolabs" target="_blank">
                    <span class="fa fa-twitter"></span>
                </a>
                <a href="mailto:hello@famingolabs.com?Subject=Quotifier%20app">
                    <span class="fa fa-envelope-o"></span>
                </a>
            </div>
            <div class="row-fluid famingo">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" style="padding: 0 0;">
                    <p><a href="http://www.famingolabs.com" target="_blank">&copy; <span id="yearFooter"></span> Famingo Labs.</a> All rights reserved.</p>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
