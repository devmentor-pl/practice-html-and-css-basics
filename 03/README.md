# LINK DO ROZWIĄZANIA:
# https://alonevoice.github.io/practice-html-and-css-basics/03/

> :star: *Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `s1e02-html-and-css-basics` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/) oraz posiadaczy [kursu JavaScript](https://devmentor.pl/p/javascript-for-beginners/)) lub na [dedykowanej grupie fb](https://www.facebook.com/groups/155234921740033). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/).*

&nbsp;

# `#03` HTML i CSS: Podstawy

Twoim zadaniem jest ostylowanie struktury HTML w taki sposób, aby:

- elementy `.parent` posiadały:
    - szerokość `600px`,
    - odstęp wewnętrzny (padding) `20px`,
- elementy `.child` posiadały:
    - odpowiednie szerokości: `30%`, `30%`, `40%` dostępnej przestrzeni (mają być ustawione w jednej linii),
    - odstęp między rodzeństwem, który będzie wynosił `10px` (czyli między `.child--first` a `.child--middle` oraz `.child--middle` a `.child--last`).
    - treść pisaną fontem [Source Sans PRO](https://www.fontsquirrel.com/fonts/source-sans-pro) (importowanym przez @font-face*):
        - element `.child--first` – styl `regular`,
        - element `.child--middle` – styl `bold`,
        - element `.child--last` – styl `italic`,
- każdy kolejny `.parent` ma być pozycjonowany innym sposobem:
    - inline-block,
    - float,
    - flexbox.

Postaraj się napisać kod CSS jak najbardziej optymalnie, utrzymując możliwie największą czytelność kodu.

&nbsp;

PS. Użyteczna może okazać się znajomość funkcji [calc()](https://www.w3schools.com/cssref/func_calc.asp).

&nbsp;

*Zwróć uwagę na stworzenie jak najbardziej uniwersalnego rozwiązania. Niech grubość i styl fontu determinowana jest przez odpowiednie właściwości CSS: `font-style` i `font-weight`, a nie nazwę (`font-family`). Poniżej znajdziesz przykład mniej (❌) i bardziej (✅) optymalnego rozwiązania.
```css
❌
@font-face {
	font-family: 'Source Sans PRO Bold';
	src: url(source-sans-pro/SourceSansPro-Bold.otf) format('opentype');
}

div {
	font-family: 'Source Sans PRO Bold';
}
```
```css
✅
@font-face {
	font-family: 'Source Sans PRO';
	src: url(source-sans-pro/SourceSansPro-Bold.otf) format('opentype');
	font-style: normal;
	font-weight: bold;
}

div {
	font-family: 'Source Sans PRO';
	font-weight: bold;
}
```

&nbsp;
> :arrow_left: [*poprzednie zadanie*](./../02) | [*następne zadanie*](./../04) :arrow_right:

> :no_entry: *Jeśli nie posiadasz materiałów do tego zadania, znajdziesz je na stronie [devmentor.pl](https://devmentor.pl/p/html-and-css-basics/)*
