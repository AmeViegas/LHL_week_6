Week 6: JS and APIs
===================

## API Madness - requirements

    Goal: Create an app that fetches data from an external service using AJAX with jQuery
    
    Option 2: Weather app
    Difficulty: Medium - ­High(ish)
    
    Why build another weather app? Because there are only like 3,420 different weather apps out there, and the jury is 
    in: we need some more. So let’s all build one!
    
    We’ll be using Weather Underground’s JSON API for this
    
    Part 1: Search city
    Allow the user to (partially) type in the name of a city into a text field. Upon submitting the data (clicking a 
    button or hitting enter), display city names that match their search string.
    Cities can be searched using WU’s Autocomplete API
    Note: did not use WU API as city list was not complete.  Instead used Geobytes and limited to US cities
    
    Part 2: Weather information
    When the user clicks the city, fetch and display the weather information for that city. The API documentation can 
    be found here: http://www.wunderground.com/weather/api/d/docs
    Please register and verify an account. After that, you can select the STRATUS plan as Developer ($0) to get your key.

## JS Betting Game (CR) - requirements

    Write a single-player betting game that runs in the browser. The player starts off with a bankroll of $100 and bets 
    money to guess a number randomly chosen by the game. If the player loses all their money, the game ends.
    
    The game should ask the player to place a bet between $5 and $10, then to guess a number between 1 and 10.
    
    If the player guesses the exact number chosen by the game, they win the bet and their bankroll increases by the 
    amount they bet. For example, if the player has $50, bets $10 on number 7, and the game chose the number 7, then 
    the player wins $10 and now has a bankroll of $60.
    
    If the player guesses a number that is off by 1, that is, the player guesses either one number higher or one number 
    lower than the computer's pick, they don't lose any money. For example, if the player has $50, bets $10 on number 7, 
    and the game chose the number 8, then the player keeps their bet and still has a bankroll of $50.
    
    If the player guesses any other number, they lose the bet and their bankroll decreases by the amount they bet. For 
    example, if the player has $50, bets $10 on number 7, and the game chose the number 2, then the player loses $10 
    and now has a bankroll of $40.
    
    Use prompt and alert to communicate with the user.

## Google Maps Mashup - requirements
    Now it's time to build a single page GMaps-based mashup.
    
    Option 1: My Fav Places
    Difficulty: Medium
    
    Add markers on the map for all your favourite places to eat or hang out at in Vancouver. (changed to: Chicago)
    
    Stretch Goals:
    
    Attach an info window to each marker place that shows up if the marker is clicked.
    Show a list or table of the places along with checkboxes below the map. They should be selected by default. If the 
    user deselects a place, it’s marker should disappear from the map.
    Add geolocation capability and show the user where they are on the map so they know where the pins are in respect 
    to their current location. You can use this example as a guide
