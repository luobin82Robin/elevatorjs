var AS3JSUtils = function () {};
	AS3JSUtils.getDefaultValue = function (value, fallback) {
		return (typeof value != 'undefined') ? value : fallback;
	};
	AS3JSUtils.createArray = function (size, val) {
		var arr = [];
		for (var i = 0; i < size; i++)
		{
		arr.push(val); 
		}
		return arr;
	};
ImportJS.pack('com.mcleodgaming.elevator.core.Elevator', function(module, exports) {
	var Main, ElevatorState, Floor, Person, PersonState, ElevatorEvent, EventDispatcher, Debug, FrameTimer;
	this.inject(function () {
		Main = this.import('com.mcleodgaming.elevator.Main');
		ElevatorState = this.import('com.mcleodgaming.elevator.core.ElevatorState');
		Floor = this.import('com.mcleodgaming.elevator.core.Floor');
		Person = this.import('com.mcleodgaming.elevator.core.Person');
		PersonState = this.import('com.mcleodgaming.elevator.core.PersonState');
		ElevatorEvent = this.import('com.mcleodgaming.elevator.events.ElevatorEvent');
		EventDispatcher = this.import('com.mcleodgaming.elevator.events.EventDispatcher');
		Debug = this.import('com.mcleodgaming.elevator.util.Debug');
		FrameTimer = this.import('com.mcleodgaming.elevator.util.FrameTimer');
	});

	var Elevator = OOPS.extend({
		name: null,
		state: 0,
		targetFloors: null,
		targetFloorsMemory: null,
		floors: null,
		currentFloor: null,
		entranceFloor: null,
		people: null,
		speedTimer: null,
		waitTimer: null,
		capacity: 0,
		_constructor_: function(params) {
			this.targetFloors = null;
			this.targetFloorsMemory = null;
			this.floors = null;
			this.currentFloor = null;
			this.entranceFloor = null;
			this.people = null;
			this.speedTimer = null;
			this.waitTimer = null;
		tick: function() {
		dumpFloorMemory: function() {
		nextFloor: function() {
		isHeadingTowards: function(floor, upwards) {
		isFree: function() {
		addPerson: function(person) {
		removePerson: function(person) {
		queueFloor: function(floor) {
		hasQueued: function(floor) {
		processFloor: function() {
		isRising: function() {
		isFalling: function() {
		isIdling: function() {
		comparePriority: function(otherElevator, targetFloor, upwards) {
	});

	module.exports = Elevator;
});
ImportJS.pack('com.mcleodgaming.elevator.core.ElevatorEngine', function(module, exports) {
	var Main, Elevator, ElevatorState, Floor, Person, PersonState, ElevatorEngineEvent, ElevatorEvent, EventDispatcher, PersonEvent, Debug, RandomNameGenerator;
	this.inject(function () {
		Main = this.import('com.mcleodgaming.elevator.Main');
		Elevator = this.import('com.mcleodgaming.elevator.core.Elevator');
		ElevatorState = this.import('com.mcleodgaming.elevator.core.ElevatorState');
		Floor = this.import('com.mcleodgaming.elevator.core.Floor');
		Person = this.import('com.mcleodgaming.elevator.core.Person');
		PersonState = this.import('com.mcleodgaming.elevator.core.PersonState');
		ElevatorEngineEvent = this.import('com.mcleodgaming.elevator.events.ElevatorEngineEvent');
		ElevatorEvent = this.import('com.mcleodgaming.elevator.events.ElevatorEvent');
		EventDispatcher = this.import('com.mcleodgaming.elevator.events.EventDispatcher');
		PersonEvent = this.import('com.mcleodgaming.elevator.events.PersonEvent');
		Debug = this.import('com.mcleodgaming.elevator.util.Debug');
		RandomNameGenerator = this.import('com.mcleodgaming.elevator.util.RandomNameGenerator');
	});

	var ElevatorEngine = OOPS.extend({
		_statics_: {
			generateFloors: function(amount) {
		generateElevators: function(amount, floors, entranceFloor, currentFloor) {
		generatePeople: function(amount, floors, entranceFloor, currentFloor) {
		},
		started: false,
		ticker: null,
		elevators: null,
		floors: null,
		people: null,
		queue: null,
		entranceFloor: null,
		_constructor_: function(params) {
			this.ticker = null;
			this.elevators = null;
			this.floors = null;
			this.people = null;
			this.queue = null;
			this.entranceFloor = null;
		start: function() {
		stop: function() {
		tick: function(e) {
			e = AS3JSUtils.getDefaultValue(e, null);
		addPerson: function(person) {
		processQueue: function() {
		onPersonEntering: function(event) {
		onPersonLeaving: function(event) {
		onPersonBoarded: function(event) {
		onPersonDeparted: function(event) {
		onPersonDone: function(event) {
		onElevatorRespond: function(event) {
		onElevatorArrive: function(event) {
		onElevatorDepart: function(event) {
		onElevatorFull: function(event) {
	});

	module.exports = ElevatorEngine;
});
ImportJS.pack('com.mcleodgaming.elevator.core.ElevatorState', function(module, exports) {
	this.inject(function () {
		ElevatorState.IDLE = 0;
		ElevatorState.RISING = 1;
		ElevatorState.FALLING = 2;
		ElevatorState.WAITING = 3;
		ElevatorState.RETURNING = 4;
		ElevatorState.BROKEN = 5;
	});

	var ElevatorState = OOPS.extend({
		_statics_: {
			IDLE: 0,
		RISING: 1,
		FALLING: 2,
		WAITING: 3,
		RETURNING: 4,
		BROKEN: 5,
		asString: function(state) {
		}
	});

	module.exports = ElevatorState;
});
ImportJS.pack('com.mcleodgaming.elevator.core.Floor', function(module, exports) {
	var Person;
	this.inject(function () {
		Person = this.import('com.mcleodgaming.elevator.core.Person');
	});

	var Floor = OOPS.extend({
		index: 0,
		name: null,
		people: null,
		_constructor_: function(params) {
			this.people = null;
		removePerson: function(person) {
		addPerson: function(person) {
	});

	module.exports = Floor;
});
ImportJS.pack('com.mcleodgaming.elevator.core.Person', function(module, exports) {
	var Elevator, Floor, PersonState, EventDispatcher, PersonEvent, FrameTimer;
	this.inject(function () {
		Elevator = this.import('com.mcleodgaming.elevator.core.Elevator');
		Floor = this.import('com.mcleodgaming.elevator.core.Floor');
		PersonState = this.import('com.mcleodgaming.elevator.core.PersonState');
		EventDispatcher = this.import('com.mcleodgaming.elevator.events.EventDispatcher');
		PersonEvent = this.import('com.mcleodgaming.elevator.events.PersonEvent');
		FrameTimer = this.import('com.mcleodgaming.elevator.util.FrameTimer');
	});

	var Person = OOPS.extend({
		name: null,
		state: 0,
		entranceFloor: null,
		currentFloor: null,
		targetFloor: null,
		currentElevator: null,
		floorTimer: null,
		waitTimer: 0,
		_constructor_: function(params) {
			this.entranceFloor = null;
			this.currentFloor = null;
			this.targetFloor = null;
			this.currentElevator = null;
			this.floorTimer = null;
		isReady: function() {
		resetTime: function() {
		waitTime: function() {
		boardElevator: function(elevator) {
		exitElevator: function(floor) {
		tick: function() {
	});

	module.exports = Person;
});
ImportJS.pack('com.mcleodgaming.elevator.core.PersonState', function(module, exports) {
	this.inject(function () {
		PersonState.QUEUEING = 0;
		PersonState.ENTERING = 1;
		PersonState.IDLE = 2;
		PersonState.LEAVING = 3;
		PersonState.DONE = 4;
	});

	var PersonState = OOPS.extend({
		_statics_: {
			QUEUEING: 0,
		ENTERING: 1,
		IDLE: 2,
		LEAVING: 3,
		DONE: 4
		}
	});

	module.exports = PersonState;
});
ImportJS.pack('com.mcleodgaming.elevator.events.ElevatorEngineEvent', function(module, exports) {
	var Event = this.import('com.mcleodgaming.elevator.events.Event');
	this.inject(function () {
		Event = this.import('com.mcleodgaming.elevator.events.Event');
		ElevatorEngineEvent.UPDATE = "elevatorEngineUpdate";
	});

	var ElevatorEngineEvent = Event.extend({
		_statics_: {
			UPDATE: null
		},
		_constructor_: function(type, data) {
	});

	module.exports = ElevatorEngineEvent;
});
ImportJS.pack('com.mcleodgaming.elevator.events.ElevatorEvent', function(module, exports) {
	var Event = this.import('com.mcleodgaming.elevator.events.Event');
	this.inject(function () {
		Event = this.import('com.mcleodgaming.elevator.events.Event');
		ElevatorEvent.ARRIVE = "elevatorArrive";
		ElevatorEvent.DEPART = "elevatorDepart";
		ElevatorEvent.RESPOND = "elevatorRespond";
		ElevatorEvent.RELEASE = "elevatorRelease";
		ElevatorEvent.NOPASSENGERS = "elevatorNoPassengers";
		ElevatorEvent.OVERBURDENED = "elevatorOverburdened";
		ElevatorEvent.FULL = "elevatorFull";
	});

	var ElevatorEvent = Event.extend({
		_statics_: {
			ARRIVE: null,
		DEPART: null,
		RESPOND: null,
		RELEASE: null,
		NOPASSENGERS: null,
		OVERBURDENED: null,
		FULL: null
		},
		_constructor_: function(typeVal, dataVal) {
	});

	module.exports = ElevatorEvent;
});
ImportJS.pack('com.mcleodgaming.elevator.events.Event', function(module, exports) {

	var Event = OOPS.extend({
		type: null,
		data: null,
		_constructor_: function(typeVal, dataVal) {
			this.data = null;
	});

	module.exports = Event;
});
ImportJS.pack('com.mcleodgaming.elevator.events.EventDispatcher', function(module, exports) {
	var Event, Debug;
	this.inject(function () {
		Event = this.import('com.mcleodgaming.elevator.events.Event');
		Debug = this.import('com.mcleodgaming.elevator.util.Debug');
		EventDispatcher.debug = false;
		EventDispatcher.dispatcher = null;
	});

	var EventDispatcher = OOPS.extend({
		_statics_: {
			debug: false,
		dispatcher: null,
		init: function() {
		},
		_eventList: null,
		_constructor_: function() {
			this._eventList = null;
		addEventListener: function(type, listener) {
		removeEventListener: function(type, listener) {
			listener = AS3JSUtils.getDefaultValue(listener, null);
		dispatchEvent: function(event) {
		hasEvent: function(type, listener) {
			listener = AS3JSUtils.getDefaultValue(listener, null);
		removeAllEvents: function() {
		getCount: function(type) {
			type = AS3JSUtils.getDefaultValue(type, null);
	});

	module.exports = EventDispatcher;
});
ImportJS.pack('com.mcleodgaming.elevator.events.PersonEvent', function(module, exports) {
	var Event = this.import('com.mcleodgaming.elevator.events.Event');
	this.inject(function () {
		Event = this.import('com.mcleodgaming.elevator.events.Event');
		PersonEvent.ENTERING = "personEntering";
		PersonEvent.BOARDED = "personBoarded";
		PersonEvent.WAITING = "personWaiting";
		PersonEvent.LEAVING = "personLeaving";
		PersonEvent.DEPARTED = "personDeparted";
		PersonEvent.DONE = "personDone";
	});

	var PersonEvent = Event.extend({
		_statics_: {
			ENTERING: null,
		BOARDED: null,
		WAITING: null,
		LEAVING: null,
		DEPARTED: null,
		DONE: null
		},
		_constructor_: function(typeVal, dataVal) {
	});

	module.exports = PersonEvent;
});
ImportJS.pack('com.mcleodgaming.elevator.Main', function(module, exports) {
	var Debug, ElevatorEngine, ElevatorView, ElevatorViewAS3, ElevatorViewJS, EventDispatcher;
	this.inject(function () {
		Debug = this.import('com.mcleodgaming.elevator.util.Debug');
		ElevatorEngine = this.import('com.mcleodgaming.elevator.core.ElevatorEngine');
		ElevatorView = this.import('com.mcleodgaming.elevator.views.ElevatorView');
		ElevatorViewAS3 = this.import('com.mcleodgaming.elevator.views.ElevatorViewAS3');
		ElevatorViewJS = this.import('com.mcleodgaming.elevator.views.ElevatorViewJS');
		EventDispatcher = this.import('com.mcleodgaming.elevator.events.EventDispatcher');
		Main.ROOT = null;
		Main.FPS = 30;
	});

	var Main = OOPS.extend({
		_statics_: {
			ROOT: null,
		FPS: 30,
		eventHelper: function(context, fn) {
			//Helps with binding events to 'this'
			return function(e) {
				return fn.call(context, e);
			};
		}
		},
		engine: null,
		view: null,
		addingPeople: false,
		addPeopleInterval: null,
		_constructor_: function() {
			this.engine = null;
			this.view = null;
			this.addPeopleInterval = null;
			Debug.init();
			Debug.log("Main class created.");

			//Some simple inits
			Main.ROOT = this;
			EventDispatcher.init();

			//Create floors, elevators, and people
			var floors = ElevatorEngine.generateFloors(10);
			var elevators = ElevatorEngine.generateElevators(5, floors, floors[0], floors[0]);
			var people = ElevatorEngine.generatePeople(4, floors, floors[0], floors[0]);
			
			//Create the engine
			this.engine = new ElevatorEngine({
				entranceFloor: floors[0],
				elevators: elevators,
				floors: floors,
				people: people
			});

			//Start the engine
			this.engine.start();

			//Start the people adding timer
			this.startAddingPeople();

			//Attach a view so we can visualize
			//view = new ElevatorView(engine); //For template version (no
			//view = new ElevatorViewAS3(engine); //For AS3 Version
			this.view = new ElevatorViewJS(this.engine); //For JS Version
		},
		addPeople: function(e) {
			e = AS3JSUtils.getDefaultValue(e, null);
			//Add a random amount of people to the elevator engine
			var people = ElevatorEngine.generatePeople(Math.round(Math.random()*(5-1) + 1), this.engine.floors, this.engine.floors[0], this.engine.floors[0]);
			for(var i = 0; i < people.length; i++)
				this.engine.addPerson(people[i]);
		},
		startAddingPeople: function() {
			if(!this.addingPeople) {
				//Turn on the people adding timer
				this.addingPeople = true;
				this.addPeopleInterval = setInterval(Main.eventHelper(this, this.addPeople), 5000);
				Debug.log("Started adding people.")
			} else {
				Debug.log("Already adding people.")
			}
		},
		stopAddingPeople: function() {
			if(this.addingPeople) {
				//Turn off the people adding timer
				this.addingPeople = false;
				clearInterval(this.addPeopleInterval);
				Debug.log("Stopped adding people.")
			} else {
				Debug.log("Not currently adding people.")
			}
		}
	});

	module.exports = Main;
});
ImportJS.pack('com.mcleodgaming.elevator.util.Debug', function(module, exports) {
	var DebugAS3, DebugJS;
	this.inject(function () {
		DebugAS3 = this.import('com.mcleodgaming.elevator.util.DebugAS3');
		DebugJS = this.import('com.mcleodgaming.elevator.util.DebugJS');
		Debug.log = null;
		Debug.warn = null;
	});

	var Debug = OOPS.extend({
		_statics_: {
			log: null,
		warn: null,
		init: function() {
			//Debug.log = DebugAS3.log; //For AS3
			//Debug.warn = DebugAS3.warn;  //For AS3
			Debug.log = DebugJS.log;
			Debug.warn = DebugJS.warn;
		}
		}
	});

	module.exports = Debug;
});
ImportJS.pack('com.mcleodgaming.elevator.util.DebugAS3', function(module, exports) {

	var DebugAS3 = OOPS.extend({
		_statics_: {
			log: function() {
			var rest = Array.prototype.slice.call(arguments).splice(0);
		warn: function() {
			var rest = Array.prototype.slice.call(arguments).splice(0);
		}
	});

	module.exports = DebugAS3;
});
ImportJS.pack('com.mcleodgaming.elevator.util.DebugJS', function(module, exports) {

	var DebugJS = OOPS.extend({
		_statics_: {
			log: function() {
		warn: function() {
		}
	});

	module.exports = DebugJS;
});
ImportJS.pack('com.mcleodgaming.elevator.util.FrameTimer', function(module, exports) {

	var FrameTimer = OOPS.extend({
		get_IsComplete: function() {
		get_MaxTime: function() {
		get_CurrentTime: function() {
		set_MaxTime: function(value) {
		set_CurrentTime: function(value) {
		m_initTime: 0,
		m_currentTime: 0,
		_constructor_: function(length) {
		tick: function(amount) {
			amount = AS3JSUtils.getDefaultValue(amount, 1);
		finish: function() {
		reset: function() {
	});

	module.exports = FrameTimer;
});
ImportJS.pack('com.mcleodgaming.elevator.util.RandomNameGenerator', function(module, exports) {
	this.inject(function () {
		RandomNameGenerator.names = ["Derek","Reginald","Hubert","Woodrow","Norma","Cheryl","Allison","Jamie","Bessie","Corey","Emily","Jeremiah","Lana","Rosemary","Willie","Alfred","Rex","Tomas","Carol","Bernard","Dean","Jan","Salvador","Antonio","John","Spencer","Bill","Angel","Clarence","Bethany","Joan","Jenna","Loretta","Marie","Jonathan","Kristi","Dolores","Eloise","Latoya","Krista","Earnest","Eduardo","Darin","Francis","Pauline","Arturo","Preston","Rosie","Sandra","Denise","Kari","Amanda","James","Darla","Alexis","Leon","Penny","Roland","Mark","Evan","Amos","Jennie","Susie","Peter","Johanna","Frederick","Christopher","Kerry","Taylor","Luz","Laverne","Greg","Marcus","Luke","Toby","Olivia","Patsy","Paula","Alex","Ernest","Myrtle","Ernesto","Eleanor","Nicole","Ivan","Claudia","Ray","Byron","Grace","Jenny","Glenda","Pablo","Maryann","Perry","Susan","Virginia","Jan","Ellen","Elsie","Hugh"];
	});

	var RandomNameGenerator = OOPS.extend({
		_statics_: {
			names: null,
		getRandomName: function() {
		}
	});

	module.exports = RandomNameGenerator;
});
ImportJS.pack('com.mcleodgaming.elevator.views.ElevatorView', function(module, exports) {
	var Elevator, ElevatorEngine, ElevatorState, Floor, ElevatorEngineEvent;
	this.inject(function () {
		Elevator = this.import('com.mcleodgaming.elevator.core.Elevator');
		ElevatorEngine = this.import('com.mcleodgaming.elevator.core.ElevatorEngine');
		ElevatorState = this.import('com.mcleodgaming.elevator.core.ElevatorState');
		Floor = this.import('com.mcleodgaming.elevator.core.Floor');
		ElevatorEngineEvent = this.import('com.mcleodgaming.elevator.events.ElevatorEngineEvent');
	});

	var ElevatorView = OOPS.extend({
		engine: null,
		_constructor_: function(e) {
			this.engine = null;
			this.engine = e;
		},
		onUpdate: function(event) {
		},
		getInfo: function(elevator) {
			//Information to display on the elevators themselves
			var info = "";
			var i = 0;
			info += 'Floor: ' + elevator.currentFloor.name + '<br />';
			info += 'State: ' + ElevatorState.asString(elevator.state) + '<br />';
			info += 'Occupants: <br />';
			if(elevator.people.length <= 0)
				info += '[empty]';
			for(i = 0; i < elevator.people.length; i++)
				info += '-' + elevator.people[i].name + ' (' + elevator.people[i].targetFloor.name + ') ' + '<br />'
			return info;
		}
	});

	module.exports = ElevatorView;
});
ImportJS.pack('com.mcleodgaming.elevator.views.ElevatorViewAS3', function(module, exports) {
	var ElevatorView = this.import('com.mcleodgaming.elevator.views.ElevatorView');
	var Main, ElevatorEngineEvent, EventDispatcher, Elevator, ElevatorEngine, Floor, PersonState;
	this.inject(function () {
		Main = this.import('com.mcleodgaming.elevator.Main');
		ElevatorView = this.import('com.mcleodgaming.elevator.views.ElevatorView');
		ElevatorEngineEvent = this.import('com.mcleodgaming.elevator.events.ElevatorEngineEvent');
		EventDispatcher = this.import('com.mcleodgaming.elevator.events.EventDispatcher');
		Elevator = this.import('com.mcleodgaming.elevator.core.Elevator');
		ElevatorEngine = this.import('com.mcleodgaming.elevator.core.ElevatorEngine');
		Floor = this.import('com.mcleodgaming.elevator.core.Floor');
		PersonState = this.import('com.mcleodgaming.elevator.core.PersonState');
	});

	var ElevatorViewAS3 = ElevatorView.extend({
		elevatorContainer: null,
		elevatorMCs: null,
		pauseButton: null,
		floorTable: null,
		floorMCs: null,
		_constructor_: function(e) {
			this.elevatorContainer = null;
			this.elevatorMCs = null;
			this.pauseButton = null;
			this.floorTable = null;
			this.floorMCs = null;
		onUpdate: function(event) {
		getInfo: function(elevator) {
	});

	module.exports = ElevatorViewAS3;
});
ImportJS.pack('com.mcleodgaming.elevator.views.ElevatorViewJS', function(module, exports) {
	var ElevatorView = this.import('com.mcleodgaming.elevator.views.ElevatorView');
	var Main, Elevator, ElevatorEngine, Floor, PersonState, ElevatorEngineEvent, EventDispatcher, Debug;
	this.inject(function () {
		Main = this.import('com.mcleodgaming.elevator.Main');
		ElevatorView = this.import('com.mcleodgaming.elevator.views.ElevatorView');
		Elevator = this.import('com.mcleodgaming.elevator.core.Elevator');
		ElevatorEngine = this.import('com.mcleodgaming.elevator.core.ElevatorEngine');
		Floor = this.import('com.mcleodgaming.elevator.core.Floor');
		PersonState = this.import('com.mcleodgaming.elevator.core.PersonState');
		ElevatorEngineEvent = this.import('com.mcleodgaming.elevator.events.ElevatorEngineEvent');
		EventDispatcher = this.import('com.mcleodgaming.elevator.events.EventDispatcher');
		Debug = this.import('com.mcleodgaming.elevator.util.Debug');
	});

	var ElevatorViewJS = ElevatorView.extend({
		pauseToggle: false,
		elevatorTable: null,
		elevatorRow: null,
		elevatorColumns: null,
		floorTable: null,
		_constructor_: function(e) {
			this.elevatorTable = null;
			this.elevatorRow = null;
			this.elevatorColumns = null;
			this.floorTable = null;
			ElevatorView.prototype._constructor_.call(this, e);
			var i;
			var self = this;
			this.engine = e;

			//Create table elements
			this.elevatorTable = $('.elevator-view tbody');
			this.elevatorRow = $('<tr/>'); //Store this for easy direct reference to rows
			this.elevatorColumns = []; //Will place the columns to display elevators in here
			this.elevatorTable.append(this.elevatorRow); //Add the row to the elevator table

			//Build floor table
			this.floorTable = $('.floor-view');
			for(i = this.engine.floors.length - 1; i >= 0; i--) {
				this.floorTable.append('<tr><td class="title">Floor ' + this.engine.floors[i].name + ':</td><td class="data"></td></tr>')
			}

			//Make pause button to start/stop the engine and people adding timer
			this.pauseToggle = $('.btn-pause');
			this.pauseToggle.click(function() {
				$('.btn-pause').toggleClass('paused');

				if($('.btn-pause').hasClass('paused')) {
					$('.btn-pause').text('Play');
					Main.ROOT.stopAddingPeople();
					self.engine.stop();
				} else {
					$('.btn-pause').text('Pause');
					self.engine.start();
					Main.ROOT.startAddingPeople();
				}
			});


			//Add elevator elements
			for(i = 0; i < this.engine.elevators.length; i++) {
				var col = $('<td/>').append($('<div/>').addClass('elevator'));
				this.elevatorColumns.push(col);
				this.elevatorRow.append(col);
			}
      
			//Ready to accept events
			EventDispatcher.dispatcher.addEventListener(ElevatorEngineEvent.UPDATE, Main.eventHelper(this, this.onUpdate));

			Debug.log('Initialized ElevatorView');
		},
		onUpdate: function(event) {
			var i, j;
			//For each floor (Floor Table View)
			for(i = 0; i < this.engine.floors.length; i++) {
				$('tr', this.floorTable).eq(this.engine.floors.length - i - 1).find('.data').text('');
				//For each person on this floor
				for(j = 0; j < this.engine.floors[i].people.length; j++) {
					var prepend = (j > 0) ? ", " : "";
					if(this.engine.queue.indexOf(this.engine.floors[i].people[j]) >= 0)
						prepend += "*"; //Button press yet to be acknowledged
					else if(this.engine.floors[i].people[j].state == PersonState.LEAVING || this.engine.floors[i].people[j].state == PersonState.ENTERING)
						prepend += "+"; //Some elevator has responded to their button press
					//Concatenate all of the people (placing in the table from the bottom up)
					$('tr', this.floorTable).eq(this.engine.floors.length - i - 1).find('.data').append(prepend + this.engine.floors[i].people[j].name + '(' + this.engine.floors[i].people[j].targetFloor.name + ')');
				}
			}
			//Render elevators (Elevator View)
			for(i = 0; i < this.engine.elevators.length; i++) {
				var height = (this.elevatorColumns[i].height() / this.elevatorTable.height() * 84); //<-Weird guessing to get the elevators to fit in the window
				var offset = (this.engine.elevators[i].currentFloor.index / this.engine.floors.length * height);
				this.elevatorColumns[i].find('.elevator').css('bottom', Math.round(offset) + '%').html(this.getInfo(this.engine.elevators[i])); //<-TODO: Change this later I guess, % is weird
			}
		}
	});

	module.exports = ElevatorViewJS;
});