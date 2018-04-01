import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return [
            {
                display: 'Terminator 2'
            },
            {
                display: '3 idiots'
            }
        ]
    },
})