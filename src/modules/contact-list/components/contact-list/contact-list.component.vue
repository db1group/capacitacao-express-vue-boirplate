<template>
  <v-list max-height="600px" lines="one">
    <v-list-item
      v-for="(item, index) in contactList"
      :key="index"
      :title="item.name"
      :subtitle="item.phone"
    >
      <template v-slot:append>
        <v-btn @click="deleteContact(item)">Delete</v-btn>
      </template>
    </v-list-item>
  </v-list>
</template>

<script lang="ts">
import { PropType } from "vue";
import { Contact } from "../../entities/contact.entity";

export default {
  props: {
    contactList: {
      type: Array as PropType<Contact[]>,
      required: true,
      default: () => [],
    },
  },
  data: () => ({}),
  methods: {
    deleteContact(contact: Contact) {
      this.$emit("delete-contact", contact);
    },
  },
};
</script>
