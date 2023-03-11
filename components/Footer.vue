<template>
  <footer class="bg-black w-full pb-9">
    <Container class="grid place-items-center gap-12 md:place-items-start md:gap-10">
      <div class="w-24 h-1 bg-dark-orange orangeborder"></div>
      <IconContainer class="logo">
        <Logo />
      </IconContainer>
      <NavLinksList class="nav" />
      <TextDescription class="text-center text-white description md:text-start lg:pr-52">Audiophile is an all in one stop to
        fulfill your audio
        needs. We're
        a small team of music lovers and
        sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </TextDescription>
      <p class="text-white/50 font-bold copyright">
        Copyright 2021. All Rights Reserved
      </p>
      <SocialMediaList class="social md:ml-auto" />
    </Container>
  </footer>
</template>

<style scoped>
@media screen and (min-width: 768px) {
  .orangeborder {
    grid-area: orangeborder;
  }

  .logo {
    grid-area: logo;
  }

  .nav {
    grid-area: nav;
  }

  .description {
    grid-area: description;
  }

  .copyright {
    grid-area: copyright;
  }

  .social {
    grid-area: social;
  }

  footer>* {
    grid-template-areas:
      "orangeborder orangeborder"
      "logo logo"
      "nav nav"
      "description description"
      "copyright social";
  }
}

@media screen and (min-width: 1024px) {
  footer>* {
    grid-template-areas:
      "orangeborder orangeborder"
      "logo nav"
      "description social"
      "copyright copyright"
  }
  .social {
    align-self: flex-end;
  }
}
</style>