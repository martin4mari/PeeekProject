<script>
import { ref } from "vue";

export default {
  setup() {
    const items = ref([
      {
        id: 0,
        title: "Item A",
        list: 0,
      },
      {
        id: 1,
        title: "Item B",
        list: 1,
      },
      {
        id: 2,
        title: "Item C",
        list: 2,
      },
    ]);

    const getList = (list) => {
      //returns the list number?
      return items.value.filter((item) => item.list == list);
    };

    const startDrag = (event, item) => {
      console.log(item);
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("itemID", item.id);
    };

    const onDrop = (event, list) => {
      const itemID = event.dataTransfer.getData("itemID");
      const item = items.value.find((item) => item.id == itemID);
      item.list = list;
    };

    return {
      getList,
      startDrag,
      onDrop,
    };
  },
};
</script>


<template>
  <div class="flex flex-col justify-around">
    <div
      class="bg-green-200 w-32 h-24 m-8"
      @drop="onDrop($event, 1)"
      @dragenter.prevent
      @dragover.prevent
    >
      <div
        class="w-24 m-2 h-18 bg-red-400 text-center"
        v-for="item in getList(1)"
        :key="item.id"
        draggable="true"
        @dragstart="startDrag($event, item)"
      >
        {{ item.title }}
      </div>
    </div>

    <div
      class="bg-green-200 w-32 h-24"
      @drop="onDrop($event, 2)"
      @dragenter.prevent
      @dragover.prevent
    >
      <div
        class="w-24 m-2 h-18 bg-red-400 text-center"
        v-for="item in getList(2)"
        :key="item.id"
        draggable="true"
        @dragstart="startDrag($event, item)"
      >
        {{ item.title }}
      </div>
    </div>
  </div>
</template>