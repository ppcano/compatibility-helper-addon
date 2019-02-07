import { gte } from "ember-compatibility-helpers";
import Controller from "@ember/controller";
import { computed } from "@ember/object";

export default Controller.extend({
  gte3: computed(function() {
    return gte("3.0.0");
  })
});
