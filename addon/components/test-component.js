import Component from '@ember/component';
import layout from '../templates/components/test-component';
import { computed } from "@ember/object";

import { gte } from "ember-compatibility-helpers";

export default Component.extend({
  layout,
  gte3: computed(function() {
    return gte("3.0.0");
  })
});
