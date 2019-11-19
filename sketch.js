var tax;
var pNum = 1150;
var sNum = 0;
var xAxis = 100;
var year = 2010;

function preload() {
  tax = loadTable("Sales_Tax_Collections.csv");
}

function setup() {
  createCanvas(1300, 1400);
  background(0);
	stroke(255);
	fill (255);

	line (xAxis, 1150, width, 1150);
	line (xAxis, 1150, xAxis, 0);
	textSize(30);
	text("Months from January 2010 to June 2019", 400, 1225);
	textSize(100);
	text ("Sales Tax Collections ", 200, 1325);
	textSize(25);
	text("$$ in ", 10, 600);
	text("taxes", 10, 630);
	text ("(millions)", 0, 660)
	textSize(20);
	text("11", 70, 25);
	text("10", 70, 125);
	text("9", 80, 225);
	text("8", 80, 325);
	text("7", 80, 425);
	text("6", 80, 525);
	circle(xAxis, 5, 5);
	line (xAxis, 5, width, 5);
	circle(xAxis, 100, 5);
	line (xAxis, 100, width, 100);
	circle(xAxis, 200, 5);
	line (xAxis, 200, width, 200);
	circle(xAxis, 300, 5);
	line (xAxis, 300, width, 300);
	circle(xAxis, 400, 5);
	line (xAxis, 400, width, 400);
	circle(xAxis, 500, 5);
	line (xAxis, 500, width, 500);
	textSize(40)
	line (220,1150, 220, 0 );
	text ("2010", 120, 600);
	line (340,1150, 340, 0 );
	text ("2011", 240, 600);
	line (460,1150, 460, 0 );
	text ("2012", 360, 600);
	line (580,1150, 580, 0 );
	text ("2013", 480, 600);
	line (700,1150, 700, 0 );
	text ("2014", 600, 600);
	line (820,1150, 820, 0 );
	text ("2015", 720, 600);
	line (940,1150, 940, 0 );
	text ("2016", 840, 600);
	line (1060,1150, 1060, 0 );
	text ("2017", 960, 600);
	line (1180,1150, 1180, 0 );
	text ("2018", 1080, 600);
	line (1300,1150, 1300, 0 );
	text ("2019", 1200, 600);

  for (var i = 1; i < tax.getRowCount()-1; i++) {
    if (tax.get(i, 3) != "") {
		sNum = pNum;
      pNum = 1050 - int(tax.get(i, 2))/10000;
		strokeWeight(3);
		line (xAxis, sNum, xAxis+10, pNum);
		circle (xAxis +10, 1150, 5);
		xAxis +=10;
		print (sNum);
		print(pNum);
    }
  }

}

function draw() {


}