<template>
  <aside v-if="isMenuShowing">
    <p class="menu-label">
      General
    </p>
    <ul class="menu-list">
      <li><a>Home</a></li>
      <li><a>Products</a></li>
    </ul>
    <Basket></Basket>
  </aside>
</template>