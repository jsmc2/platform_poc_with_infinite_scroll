# POC Platform/Store Demo

This project is a POC of a platform that uses a mediator pattern like event handling system that then enacts updates to a top-level store that then reflects back to the view in a flux-like pattern for a React app context. The demo view for presenting this is a page of listings - cat listings - that has infinite scroll up to a max of five "pages".

One can think of the overall architecture metaphorically as a symphony orchestra. The orchestra's players are the components. The conductor is the platform's notice management/handling system. The conductor constantly update the score (the store state) in response to events, and these updates are then passed back to the players in the orchestra.

Note not all events have to come from the players in the orchestra, they can come from off stage (eg., data coming into the app by stream or API) or even internally in the notice management/handling system itself.

In a nutshell these are the typical steps of the process:

1. Some event occurs on a component.
2. The component notifies the platform of the event, but only describes _what happened_ without providing instruction on how to act.
3. The platform finds a handler for the described event.
4. The handler runs whatever logic is proper per the event to updating a copy of store. Note handlers can delegate to other handlers by firing off events notices to the platform just like components.
5. When the handling of the event is done the original score is "replaced" by the new store (the store copy) which can reflect multiple simultaneous updates during event handling to its state.
6. The view observes there's a new store and components react if needed to changes found in the new store.

The React hook useState is utilized to trigger updates to the view tree when the store is updated. This is done via an observer of committal (replacement of old store w/ new store) of writes to the store.

The store is passed down through the view tree but only those components wrapped with the "withStoreHOC" interface are able to react to it, since the withStoreHOC interface has built into it the React hook useContext for reacting to changes to the store context. The withStoreHOC interface also provides for mapping the wrapped component attributes to store props.
Also the use of React.memo is widely used to keep sub-components that are under a component that re-renders from the burden of running both their logic and re-rendering.

Almost all platform functionality that the views may need - including hooks, tools and HOC - can be initialized into the platform (see platform/index.js) and then the platform can be imported into components, therefore providing a wide array of utility to component with one import.

Finally the platform POC is separated into two parts. The files found under the folder "platform_core" represent those files that metaphorically would come from a vendor throught NPM, and so are not meant to be touched by developers. The files found under the folder "platform" represent those files that initialize, expose-from and add-to platform_core for the needs of the app. This is what the app interfaces with. The system found under "platform_core" has no dependencies on what is under "platform" including the name of the folder itself.

Note, this is not meant to be a replacement for vendor platform like redux, mobx, apollo, etc. Perhaps it's quite instructional to oneself to work out a platform with some old and new React patterns. Maybe others might use this project as a starting off point for doing that.
