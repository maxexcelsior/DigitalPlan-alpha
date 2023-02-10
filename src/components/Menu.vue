<template>
  <div class="menu" :class="{ 'small-menu': smallMenu }">
    <div class="menu-toggle" @click="smallMenu = !smallMenu"><i  class="material-icons">menu</i></div>
    <MenuItem
      v-for="(item, index) in menuTree"
      :key="index"
      :data="item.children"
      :menuLabel="item.menuLabel"
      :icon="item.icon"
      :depth="0"
      :smallMenu="smallMenu"
    />
    
  </div>
</template>

<script>
import MenuItem from './MenuItem.vue';
export default {
  name: 'recursive-menu',
  data: () => ({
    smallMenu: false,
    menuTree: [
      {
        menuLabel: "Home",
        icon: "home",
        children: [
          {
            menuLabel: "level 1.1",
            children: [
              {
                menuLabel: "level 1.1.1",
                children: [
                  {
                    menuLabel: "level 1.1.1.1"
                  }
                ]
              }
            ]
          },
          {
            menuLabel: "level 1.2"
          }
        ]
      },
      {
        menuLabel: "Dashboard",
        icon: "dashboard",
        children: [
          {
            menuLabel: "level 2.1",
          },
          {
            menuLabel: "level 2.2"
          },
          {
            menuLabel: "level 2.3"
          }
        ]
      },
      {
        menuLabel: "Settings",
        icon: "settings"
      }
    ]
  }),
  components: {
    MenuItem
  }
}
</script>

<style lang="scss" >
.menu-toggle:hover {
    background-color: rgb(128, 128, 128);
}
.menu {
  height: 100%;
  width: 240px;
  padding-top: 20px;
  border-right: 1px solid #ececec;
  transition: all .3s ease;
  overflow: auto;
  i {
    font-size: 20px;
    user-select: none;
    cursor: pointer;
    transition: all .3s ease;
  }
  &.small-menu {
    overflow: inherit;
    width: 60px;
    padding-top: 20px;
    i {
      left: 20px;
    }
  }
}
</style>