<script lang="ts" setup>
</script>

<template>
  <div class="svg-line-animation">
    <svg width="1920px" height="80px" viewBox="0 0 1920 80" version="1.1" xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink">

      <defs>
        <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="100%">
          <stop stop-color="cyan" stop-opacity="1" offset="0%" />
          <stop stop-color="cyan" stop-opacity=".7" offset="10%" />
          <stop stop-color="cyan" stop-opacity=".65" offset="20%" />
          <stop stop-color="cyan" stop-opacity=".6" offset="30%" />
          <stop stop-color="cyan" stop-opacity=".5" offset="50%" />
          <stop stop-color="cyan" stop-opacity=".4" offset="70%" />
          <stop stop-color="cyan" stop-opacity=".3" offset="90%" />
          <stop stop-color="cyan" stop-opacity=".25" offset="99%" />
          <stop stop-color="cyan" stop-opacity=".2" offset="100%" />
        </linearGradient>
      </defs>

      <g id="box" fill="none" stroke="url(#gradient)" stroke-width="4">
        <path
          d="M5.68434189e-14,0 L514.378666,21.3843123 C527.651194,32.1681468 538.247618,40.0400426 546.167938,45 C569.124032,59.3758384 578.454319,80 640.892683,80 C654.928677,80 761.226348,80 959.785698,80"
          class="left-box"></path>
        <path
          d="M960,0 L1474.37867,21.3843123 C1487.65119,32.1681468 1498.24762,40.0400426 1506.16794,45 C1529.12403,59.3758384 1538.45432,80 1600.89268,80 C1614.92868,80 1721.22635,80 1919.7857,80"
          class="right-box" transform="translate(1439.8928, 40) scale(-1, 1) translate(-1439.8928, -40)"></path>
      </g>
    </svg>
  </div>
</template>

<style>
.svg-line-animation {
  background-color: #000000;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.svg-line-animation .left-box,
.svg-line-animation .right-box {
  --colorA: rgba(255, 255, 255, 0.3);

  clip-path: inset(0 0 0 100%);
  animation: dash 4s linear infinite;
  filter: drop-shadow(0 0 4px var(--colorA)) drop-shadow(0 0 4px var(--colorA)) drop-shadow(0 0 4px var(--colorA)) drop-shadow(0 0 4px var(--colorA)) drop-shadow(0 0 4px var(--colorA));
}

@keyframes dash {
  to {
    clip-path: inset(0 0 0 0);
  }
}
</style>
