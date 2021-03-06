// Localized resources

const common = {
  // From index.js
  'UNKNOWN_INTENT': 'Sorry, I didn\'t get that. Try saying Help.',
  'UNKNOWN_INTENT_REPROMPT': 'Try saying Help.',
  // From Back.js
  'BACK_NOBACK': 'I can\'t go back from this point. Please ask for a new set of restaurants.',
  // From Details.js
  'DETAILS_NONUMBER': 'I\'m sorry, I didn\'t hear a number of the restaurant you wanted details about.',
  'DETAILS_READLIST': 'Please ask to start reading the list before asking for details.',
  'DETAILS_NOLIST': 'You need to search for restaurnts before reading details. Try saying fid cheap chinese restaurants.',
  'DETAILS_INVALID_NUMBER': 'That is not a valid option to read. Please ask for a valid number or say repeat to repeat ths list.',
  'DETAILS_INVALID_NUMBER_REPROMPT': 'Please ask for a valid number of say repeat to repeat the list.',
  'DETAILS_LISTEND': 'You are at the end of the list. Please do a new search or say back to go back to the list of results.',
  'DETAILS_LISTEND_REPROMPT': 'Please search for another set of restaurants.',
  // From Exit.js
  'EXIT_GOODBYE': 'Goodbye|Cheers|Thanks for using Restaurant Finder',
  // From Help.js
  'HELP_LIST': 'Say repeat to hear this list again or say the number of the restaurant that you want more details about',
  'HELP_LIST_MORE': ' or say more to hear more restaurants.',
  'HELP_RESULTS': 'Say read list to hear the list of restaurants.',
  'HELP_DETAILS': 'You can say back to go back to the list of restaurants, or find restaurants to find more restaurants.',
  // From Launch.js
  'LAUNCH_WELCOME': 'Welcome to Restaurant Finder. You can say Find {0} {1} restaurant {2}. How can I help you?',
  'LAUNCH_CUISINE': 'Chinese|Indian|Italian|burger|pizza',
  'LAUNCH_QUALIFIER': 'a cheap|a great|a good|an open',
  'LAUNCH_REPROMPT': 'For instructions on what you can say, please say help me.',
  // From ReadList.js
  'READLIST_SEARCH': 'You need to search for restaurants before reading a list. <break time=\"200ms\"/> Try saying find cheap chinese restaurants.',
  'READLIST_SEARCH_REPROMPT': 'Try saying find cheap chinese restaurants.',
  'READLIST_END': 'You are at the end of the list. Please ask for a new set of restaurants.',
  // From Repeat.js
  'REPEAT_NONE': 'I have nothing to repeat. What else can I help you with?',
  // From utils.js
  'GENERIC_REPROMPT': 'What else can I help with?',
  'SPEECH_ERROR': 'Sorry, something went wrong',
  'RESULTS_NORESULTS': 'I\'m sorry, I didn\'t find any {0}. ',
  'RESULTS_RESULTS': 'I found {0} {1}. ',
  'RESULTS_REPROMPT': 'Say read list to start reading the list',
  'RESULTS_FILTER': ' <break time=\"200ms\"/> or filter your search with additional conditions like {0}',
  'RESULTS_FILTER_CUISINE': 'chinese|british|italian|mexican|steakhouse|german',
  'RESULTS_FILTER_RATING': 'good|great',
  'RESULTS_FILTER_PRICE': 'cheap|moderate|expensive',
  'RESULTS_DETAILS': 'You can ask for more details by saying the corresponding restaurant number',
  'READLIST_RESULTS': 'Reading {0} restaurants. ',
  'READLIST_MORE': ' or say More to hear more results',
  'DETAILS_PRICE_CHEAP': 'cheap',
  'DETAILS_PRICE_MODERATE': 'moderately priced',
  'DETAILS_PRICE_SPENDY': 'spendy',
  'DETAILS_PRICE_SPLURGE': 'splurge',
  'DETAILS_LOCATION': '{0} is located at {1} in {2}',
  'DETAILS_PHONE': '<break time=\"200ms\"/> The phone number is <say-as interpret-as="telephone">{0}.</say-as>',
  'DETAILS_OPEN': 'open.',
  'DETAILS_CLOSED': 'closed.',
  'DETAILS_OPERATING': '<break time=\"200ms\"/> It is currently {0}',
  'DETAILS_SEECARD': '<break time=\"200ms\"/> See the Alexa app for more details',
  'DETAILS_CARD_YELP': 'Yelp rating: {0} ({1} reviews)\n',
  'DETAILS_CARD_PRICE': 'Price: {0}\n',
  'DETAILS_CARD_PHONE': 'Phone: {0}\n',
  'DETAILS_CARD_OPEN': 'Open',
  'DETAILS_CARD_CLOSED': 'Closed',
  'DETAILS_CARD_OPERATING': 'Currently: {0}\n',
  'DETAILS_CARD_DELIVER_RESERVATION': 'Offers delivery and reservations\n',
  'DETAILS_CARD_DELIVER': 'Offers delivery\n',
  'DETAILS_CARD_RESERVATION': 'Offers reservations\n',
  'PARAMS_OPEN': 'open ',
  'PARAMS_GOOD': 'good',
  'PARAMS_GREAT': 'great',
  'PARAMS_BEST': 'exceptional',
  'PARAMS_BAD': 'bad',
  'PARAMS_TERRIBLE': 'terrible',
  'PARAMS_CHEAP': 'cheap',
  'PARAMS_MODERATE': 'moderate',
  'PARAMS_SPENDY': 'spendy',
  'PARAMS_SPLURGE': 'splurge',
  'PARAMS_INEXPENSIVE': 'inexpensive',
  'PARAMS_EXPENSIVE': 'expensive',
  'PARAMS_RESTAURANTS': 'restaurants',
  'PARAMS_IN': ' in {0}',
};

const usOnly = {
  // From FindRestaurant.js
  'FIND_LOCATION': 'Please provide a location, or grant this skill permission in the Alexa app to use your current ZIP code.',
  // From Help.js
  'HELP_DEFAULT': 'You can find restaurants by cuisine such as Chinese <break time=\"200ms\"/> price range such as cheap <break time=\"200ms\"/> Yelp view such as good <break time=\"200ms\"/> or open to find restaurants that are currently open. <break time=\"200ms\"/> For example, you can say Find a cheap Chinese restaurant in Seattle',
  // From Launch.js
  'LAUNCH_CITIES': 'in Austin|in Seattle|in New York|in San Francisco|in Chicago|near me',
  // From utils.js
  'POSTAL_FORMAT': 'NNNNN',
};

const caOnly = {
  // From FindRestaurant.js
  'FIND_LOCATION': 'Please provide a location, or grant this skill permission in the Alexa app to use your current location.',
  // From Help.js
  'HELP_DEFAULT': 'You can find restaurants by cuisine such as Chinese <break time=\"200ms\"/> price range such as cheap <break time=\"200ms\"/> Yelp view such as good <break time=\"200ms\"/> or open to find restaurants that are currently open. <break time=\"200ms\"/> For example, you can say Find a cheap Chinese restaurant in Toronto',
  // From Launch.js
  'LAUNCH_CITIES': 'in Vancouver|in Toronto|in Montreal|in Victoria|near me',
  // From utils.js
  'POSTAL_FORMAT': 'ANA NAN',
};

const resources = {
  'en-US': {
    'translation': Object.assign({}, common, usOnly),
  },
  'en-CA': {
    'translation': Object.assign({}, common, caOnly),
  },
};

// Use a proxy in case we are asked for a language not called out above
const handler = {
  get: function(target, name) {
    return target.hasOwnProperty(name) ? target[name] : target['en-US'];
  },
};

module.exports = {
  languageStrings: new Proxy(resources, handler),
};
