<script lang="ts" setup name="<%= prefixU %><%= displayName %>">
  import { Props } from './props'

  const prop = defineProps(Props)
</script>

<template>
  <div class="<%= prefixL %>-<%= name %>"><%= prefixU %><%= displayName %></div>
</template>
