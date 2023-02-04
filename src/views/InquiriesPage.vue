<template>
  <div id="Inquiry" class="py-15 app-padding">
    <table style="width: 100%">
      <tr>
        <th>Name</th>
        <th>Contact</th>
        <th>Description</th>
        <th>Date</th>
      </tr>
      <tr v-for="(item,i) in inquiry_list" :key="i">
        <td>{{ item.name }}</td>
        <td>
          <p> {{ item.mobile }}</p>
          <p> {{ item.email }}</p>

        </td>
        <td>{{ item.description }}</td>
        <td>{{ item.date_time }}</td>
      </tr>
    </table>

  </div>
</template>
<style lang="scss" scoped>


table {
  border-collapse: collapse;
  width: 100%;
}

table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

table th {
  background-color: #f2f2f2;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

table th:first-child {
  border-top-left-radius: 10px;
  border-top: none;
  border-left: none !important;
}

table th:last-child {
  border-top-right-radius: 10px;
  border-top: none;
  border-right: none !important;
}


table tr:nth-child(even) {
  background-color: #ffffff;
}

table tr:hover {
  background-color: #ddd;
}

</style>

<script>

import {defineComponent,} from 'vue'
import {useLoadUsers} from "@/firebase-config";

export default defineComponent({
  name: 'InquiriesPage',
  components: {},
  data() {
    return {
      inquiry_list: [],
    }
  },
  mounted() {
    this.getInquiryList()
  },
  methods: {
    getInquiryList() {
      this.inquiry_list = useLoadUsers()
    },
  }
});
</script>
