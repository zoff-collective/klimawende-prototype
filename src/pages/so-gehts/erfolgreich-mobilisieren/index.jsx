import { graphql } from 'gatsby';
import React from 'react';

import Checklist from './checklist';
import Constraint from '../../../components/constraint';
import Headline from '../../../components/text/headline';
import Infobox from '../../../components/text/infobox';
import Intro from '../../../components/intro';
import Paragraph from '../../../components/text/paragraph';
import TableOfContents from './table-of-contents';
import withLayout from '../../../components/with-layout';

import '../style.scss';

const Page = ({
  data: {
    content: { title, intro, image }
  }
}) => (
  <div className="so-gehts so-gehts--mobilisieren">
    <Intro title={title} intro={intro} image={image} />

    <section className="so-gehts__body">
      <Constraint width="wide" className="so-gehts__body-constraint">
        <div className="so-gehts__body-content-container">
          <Paragraph text="Bei all diesen Schritten können wir von den Erfahrungen derer profitieren, die bereits mit direkter Demokratie Klimapolitik machen. Auch sie haben mal so angefangen: Mit dem Klemmbrett in der Hand und der Scheu, nun tatsächlich fremde Menschen auf der Straße anzusprechen. Im Laufe der Kampagne sind sie zu politischen AkteurInnen in ihren Gemeinden geworden. Wenn wir die Tipps aus der Praxis beachten, brauchen auch wir für den Anfang nicht mehr als eine kleine Gruppe motivierter Leute. Der Schwung kommt dann ganz schnell von allein. Was bei vergangenen und aktuell noch laufenden Kampagnen besonders gut funktioniert hat und welche Fallstricke es gibt, erfahrt ihr hier." />

          <Headline level="2" levelStyle="2" underlined id="buendnis">
            Ein Bündnis gründen
          </Headline>

          <Paragraph
            text="Je breiter das Bündnis, desto größer die Reichweite und das Renommee des Anliegens. Bewährt hat sich eine Bündnisstruktur über mehrere Ebenen."
            isIntro
          />

          <Checklist
            items={[
              'Ein <em>TRÄGERKREIS</em> aus den InitiatorInnen und engen BündnispartnerInnen trifft sich in geringen zeitlichen Abständen. Hier laufen alle Fäden zusammen. Der Trägerkreis fällt im Tagesgeschäft die Entscheidungen, etwa über Budgetfragen oder die Kommunikation nach außen. Er führt Konten, schließt Honorarverträge ab und verwaltet die Internetseite.',
              'Der <em>UNTERSTÜTZERKREIS</em> setzt sich aus Organisationen, Einzelpersonen und Unternehmen zusammen, die sich ideell hinter das Bürgerbegehren stellen und eventuell bei der Mobilisierung helfen. Das können auch ungewöhnliche Partner wie Fußballvereine oder Club-BetreiberInnen sein. So erreichen wir neue Zielgruppen.',
              'Ein <em>PLENUM</em> inklusive der UnterstützerInnen und Engagierten trifft sich in größeren zeitlichen Abständen. Hier werden Grundsatzentscheidungen getroffen, etwa die Annahme von Verhandlungsangeboten der Gegenseite.',
              'Ein <em>KAMPAGNENBÜRO</em> kümmert sich um Koordination und organisatorische Aufgaben. Es ist die zentrale Anlaufstelle des Bürgerbegehrens.',
              '<em>ARBEITSGRUPPEN</em> zu Bereichen wie Inhalte/Forderungen, Presse/Öffentlichkeitsarbeit, Aktionen/Unterschriftensammlung und Organisation/Finanzen können den Trägerkreis inhaltlich und organisatorisch unterstützen.',
              'Gewählte <em>SPRECHERINNEN</em> vertreten das Bündnis nach außen.'
            ]}
            ordered
          />

          <img src="/images/07_00TB_1344.png" alt="" className="image" />

          <Headline level="3" levelStyle="3">
            Als Bündnis an einem Strang ziehen
          </Headline>

          <Checklist
            items={[
              'Es empfiehlt sich, die bei unserem Thema engagierten Einzelpersonen, Initiativen, Organisationen und Verbände frühzeitig zu einem ERSTEN TREFFEN einzuladen. So erhalten wir als InitiatorInnen einen Überblick darüber, wer Interesse hat, uns zu unterstützen und wie groß der Aktivenkreis werden könnte.',
              'Im <em>TRÄGERKREIS</em> sollten wir gleich zu Anfang Transparenz über Ziele und Organisationsinteressen schaffen. Wir suchen gemeinsame Nenner, auch wenn wir nicht alle Wünsche einbeziehen können.',
              'Es kann sinnvoll sein, im Trägerkreis eine <em>KOOPERATIONSVEREINBARUNG</em> zu beschließen. Darin können wir beispielsweise Festlegungen zur Beteiligung politischer Parteien, Regeln für die Entscheidungsfindung und Eckpunkte für die interne und externe Kommunikation festhalten. Sinnvoll ist es auch, sich zu einem frühen Zeitpunkt darüber zu verständigen, wer die gesammelten Daten, zum Beispiel Email-Adressen von UnterstützerInnen, verwaltet, welche Organisationen darauf Zugriff haben und was mit den Daten nach Abschluss der Kampagne geschieht.',
              '<em>GELD</em> sammeln wir im Bündnis entsprechend der Finanzstärke der jeweiligen Organisationen. Wir können auch Mindestbeiträge für Träger- und Unterstützerkreismitglieder festsetzen. Über unsere eigenen und die Kanäle unserer PartnerInnen rufen wir außerdem zu Spenden auf. Besonders gut funktioniert das, wenn wir um Geld für eine konkrete Anschaffung bitten. Von welchen Institutionen wir Spenden akzeptieren, bedarf einer Diskussion im Plenum. Bei größeren Summen beachten wir die rechtlichen Veröffentlichungspflichten. Im Idealfall können wir die Spenden gegen Zuwendungsbescheinigung über einen gemeinnützigen Verein sammeln.',
              'Unter Berücksichtigung der Fristen für Bürgerbegehren in unserem Bundesland und relevanter politischer Termine legt der Trägerkreis eine grobe <em>ZEITPLANUNG</em> fest. Wir erarbeiten eine gemeinsame Zielsetzung und eine Strategie, mit der wir diese Ziele erreichen. Dabei beachten wir, dass die Kampagne nach dem Bürgerentscheid nicht zu Ende ist. Wir müssen die Umsetzung überwachen und sie eventuell durch öffentlichkeitswirksame Aktionen einfordern.'
            ]}
          />

          <Checklist
            items={[
              'Wir identifizieren <em>KOMPETENZEN</em> in unseren Reihen und überlegen, wen wir noch gezielt in das Bündnis einladen können. Nützlich sein kann uns insbesondere: Erfahrung aus vergangenen Bürgerbegehren; Fachwissen zum Thema; Kontakte zu möglichen BündnispartnerInnen, potenziellen SpenderInnen, Politik und Medien; Fähigkeiten im Bereich PR und Mediengestaltung; Reichweite für die Mobilisierung; Zugang zu Material oder einem Kampagnenbüro.',
              'Wenn wir Organisationen als Unterstützer anfragen, macht es Sinn, ihnen einen <em>FRAGEBOGEN</em> zu schicken. Darin tragen diese ein, welchen finanziellen Beitrag sie leisten können, ob und in welchem Umfang und Bereich sie personelle Kapazitäten bereitstellen und über welche Kanäle sie das Bürgerbegehren bewerben werden.',
              'Mit Unterstützerorganisationen jenseits der „üblichen Verdächtigen“ aus der Umweltbewegung kommen auch neue <em>AKTIONSMÖGLICHKEITEN</em> ins Bündnis. Das können Club-BetreiberInnen unserer Stadt sein, die für das Bürgerbegehren werben oder eine lokale Brauerei, die auf Bierdeckeln auf die anstehende Abstimmung hinweist.',
              'Unsere <em>SITZUNGEN</em> sind fruchtbar, wenn sie gut vorbereitet und strukturiert sind. Wir brauchen eine ergebnisorientierte Moderation. Eine Person sollte im Vorfeld eine Tagesordnung erarbeiten, eine weitere im Nachgang ein Protokoll.'
            ]}
          />

          <Infobox
            title="Stadtteilgruppen"
            content="<p class='paragraph'>Aus dem gewonnenen „Volksentscheid Fahrrad“ haben sich in den verschiedenen Berliner Stadtteilen Aktive zu festen politischen Gruppen zusammengeschlossen. Sie treffen sich weiterhin regelmäßig und planen Aktionen oder Mitteilungen an die Presse. So erzeugen sie einen kontinuierlichen Druck auf die Stadtverwaltung, den Volksentscheid umzusetzen.</p>"
          />

          <Headline level="2" levelStyle="2" underlined id="website">
            Eine Website entwerfen
          </Headline>

          <Paragraph
            text="Unsere Website muss wie ein übersichtlicher Infostand funktionieren: Interessierte sollen möglichst schnell verstehen, worum es geht – und dann am besten gleich unterschreiben."
            isIntro
          />

          <Headline level="3" levelStyle="3">
            Auf der Startseite stehen…
          </Headline>

          <Checklist
            items={[
              'unsere Forderungen',
              'eine mit den entsprechenden Links versehene Erläuterung, was Interessierte tun können, um uns zu unterstützen, zum Beispiel: <ul class="list"><li><p class="paragraph">Unterschriftenliste <em>HERUNTERLADEN</em></p></li><li><p class="paragraph">Selbst unterschreiben</p></li><li><p class="paragraph">FreundInnen unterschreiben lassen</p></li><li><p class="paragraph">Listen an einer <em>SAMMELSTELLE</em> abgeben</p></li></ul>',
              '<em>TERMINE</em> und <em>NEUIGKEITEN</em> rund um unsere Kampagne.',
              'ein Feld, um sich in unseren <em>NEWSLETTER</em> einzutragen. Für viele Kampagnen ist er das wichtigste Kommunikationstool.',
              'Icons mit Links zu unseren <em>SOCIAL-MEDIA</em>-Kanälen.',
              'am unteren Seitenrand Links zu einem <em>IMPRESSUM</em>, einer <em>DATENSCHUTZERKLÄRUNG</em>, einer <em>SITEMAP</em> und <em>KONTOINFORMATIONEN</em> für SpenderInnen.'
            ]}
          />

          <Headline level="3" levelStyle="3">
            Mögliche Menüpunkte sind…
          </Headline>

          <Checklist
            items={[
              '<em>ZIELE</em> samt Erläuterungen',
              '<em>UNTERSCHREIBEN</em>: Hier können Interessierte sich Listen herunterladen oder sie sich eventuell auch per Formular zuschicken lassen. Später ersetzen wir diesen Punkt durch <em>ABSTIMMEN</em>, mit Informationen zur Abstimmung und zur Briefwahl.'
            ]}
          />

          <img src="/images/07_01Computer_1344.png" alt="" className="image" />

          <Headline level="2" levelStyle="2" underlined id="soziale-netzwerke">
            Soziale Netzwerke nutzen
          </Headline>

          <Paragraph
            text="Über Social-Media-Kanäle gewinnen wir neue MitstreiterInnen und werden auch überregional sichtbar."
            isIntro
          />

          <Checklist
            items={[
              'Auf Twitter ist es kein Problem, dreimal täglich und öfter einen Tweet abzusetzen. Bei Facebook und Instagram reicht ein Post pro Tag. Vor allem während Aktionen oder im Endspurt unserer Kampagne können wir die <em>FREQUENZ</em> aber erhöhen, ohne dass uns gleich Follower abspringen.',
              'Pointierte und humorvolle Inhalte verbreiten sich besser als lange, komplexe Beiträge. Ein Facebook-Post sollte eine <em>LÄNGE</em> von etwa 400 Zeichen nicht überschreiten.',
              'Auf Facebook können wir <em>VERANSTALTUNGEN</em> erstellen. So rutschen wir in die Terminkalender der Leute.',
              'Besonders häufig werden <em>MULTIMEDIALE INHALTE</em> geteilt, zum Beispiel Textkarten, Bilder, Videos von Aktionen oder Videostatements prominenter Gesichter der Kampagne und aus der Öffentlichkeit.',
              'Anderen AkteurInnen aus unserem Themenfeld zu folgen und ihren Content zu teilen, trägt zur <em>VERNETZUNG</em> bei. Wir können andere Organisationen auch anschreiben und sie bitten, unsere Inhalte zu teilen.',
              'Einschlägige <em>HASHTAGS</em> sowie Orts- und Personen-Tags, zum Beispiel von KooperationspartnerInnen, unterstützen die Verbreitung unserer Botschaften.'
            ]}
          />

          <img src="/images/07_02Handy_1344.png" alt="" className="image" />

          <Infobox
            title="Gesichter der Klimawende"
            content="<p class='paragraph'>Der „Radentscheid Stuttgart“ stellt Porträtfotos von Aktiven zusammen mit Statements, warum sie sich für den Radentscheid engagieren, als kurze Fotoalben auf Instagram. Zum Schluss stehen zwei allgemeine Info-Textkarten zum Radentscheid. Auf Facebook laufen die Bilder hintereinander als Video.</p>"
          />

          <Headline level="2" levelStyle="2" underlined id="expertise">
            Expertise aufbauen
          </Headline>

          <Paragraph
            text="Wissen kann man nie genug haben im Kampf um die politische Deutungshoheit. Es wächst, wenn wir es mit anderen AktivistInnen teilen."
            isIntro
          />

          <Checklist
            items={[
              'Eine allgemeine <em>BÜRGERBEGEHRENS-BERATUNG</em> erhalten wir beim Verein „Mehr Demokratie“. Zusätzlich kann juristische Beratung sinnvoll sein, um die Abstimmungsfrage und die Forderungen auszuarbeiten.',
              'Gleich zu Beginn unserer Kampagne setzen wir uns mit den <em>ARGUMENTEN</em> der Gegenseite auseinander, um sie fundiert zu entkräften. Wasserdichte Fakten und Antworten auf häufige Fragen können wir als FAQ auf die Homepage stellen und in Form eines Handzettels den SammlerInnen mitgeben.',
              'Wir sollten uns mit wissenschaftlichen Studien und <em>GUTACHTEN</em> vertraut machen, die unsere Argumentation stärken. So können unsere Forderungen nicht als technisch nicht machbar oder ökonomisch nicht tragbar diskreditiert werden.',
              'Eine <em>INFOBROSCHÜRE</em>, die den Wissensstand zum Thema zusammenfasst, ist am Anfang sehr hilfreich.',
              '<em>RECHERCHEN</em> zu konkreten lokalen Missständen, die mit unserem Thema zu tun haben, können auch für die Presse interessant sein.',
              'Um den Vorbereitungsaufwand für Info-Veranstaltungen zu reduzieren, lohnt es sich, <em>MUSTER-VORTRÄGE</em> anzufertigen.',
              'Mit den InitiatorInnen vergangener Bürgerbegehren in unserer Kommune oder zum gleichen Thema können wir in einen <em>AUSTAUSCH</em> von Wissen und Erfahrungen treten. Auf www.klimawende.org finden wir AnsprechpartnerInnen aus anderen Klima-Bürgerbegehren.'
            ]}
          />

          <Headline level="2" levelStyle="2" underlined id="presse">
            Mit der Presse sprechen
          </Headline>

          <Paragraph
            text="Nur wenn über uns berichtet wird, erfahren die Leute, dass es uns gibt. Dafür sollten wir sorgen."
            isIntro
          />

          <Checklist
            items={[
              'Bevor wir mit unseren Forderungen an die Presse gehen, sollten wir zunächst den <em>DIALOG</em> mit den AdressatInnen unseres Bürgerbegehrens suchen. So können wir einschätzen, wie viel Gegenwind uns erwartet. Außerdem erhalten wir wertvolle Informationen und vermeiden unnötige Frontenbildung.',
              'Ein <em>SPRECHZETTEL</em> mit Stichpunkten und Antworten auf die erwartbaren Fragen sorgt dafür, dass wir nicht ins Schwimmen geraten, wenn wir vor die Mikrofone treten.'
            ]}
          />

          <img src="/images/07_03Interview_1344.png" alt="" className="image" />

          <Checklist
            items={[
              'Wir identifizieren <em>KERNBOTSCHAFTEN</em> und eine Geschichte, die wir erzählen wollen. Wir bleiben dabei so nah wie möglich an der Lebenswirklichkeit der Menschen.',
              'Organisationen aus unserem Bündnis können uns beim Aufbau eines <em>PRESSEVERTEILERS</em> unterstützen. Besonders wichtig sind für uns lokale Medien und solche, die zu unserem Thema berichten.Dabei sollten wir auch die kostenlosen, sehr auflagenstarken Hauswurf-Zeitungen und Blogs nicht vergessen.',
              'Zum Auftakt empfiehlt es sich, eine <em>PRESSEKONFERENZ</em> durchzuführen. Dazu versenden wir einige Tage vorher eine Presseeinladung an Lokalzeitungen und die örtlichen Radio- und Fernsehsender.',
              'Telefonisches <em>NACHHAKEN</em> im Vorfeld einer Aktion oder Veröffentlichung erhöht die Chance, bei der Berichterstattung berücksichtigt zu werden.',
              'Um unsere <em>PRESSEKONTAKTE</em> auszubauen verfolgen wir, welche JournalistInnen über uns schreiben und sprechen sie gezielt an. Wenn wir PressevertreterInnen treffen, fragen wir sie nach ihrer Visitenkarte.',
              'Für den <em>VERSAND</em> von Pressemitteilungen zeigt die Erfahrung, dass sie von Montag bis Donnerstag eher aufgegriffen werden als am Wochenende und vormittags eher als nachmittags. An Tagen, an denen Großereignisse ohne Bezug zu unserem Thema die Berichterstattung dominieren, gehen Emails an die Redaktionen leicht unter.',
              'Indem wir erreichte Kampagnen-Meilensteine oder inhaltliche Kontroversen kommunizieren, schaffen wir <em>ANLÄSSE</em> für die Berichterstattung. Meinungsbildende JournalistInnen bewegen wir eventuell zu einer Publikation, wenn wir ihnen Exklusivmaterial anbieten. Auch bildgewaltige Aktionen werden gern von der Presse aufgegriffen. Fotos in professioneller Qualität können wir den Zeitungen anbieten. Gleichzeitig verwenden wir sie für unsere Öffentlichkeitsarbeit.'
            ]}
          />

          <Infobox
            title="Roten Teppich ausrollen"
            content="<p class='paragraph'>Der „Radentscheid Stuttgart“ hat Radfahrenden vor laufender Kamera den roten Teppich ausgerollt. Er war 50 Meter lang, hatte Handschlaufen an den Seiten und war mit Fahrrad-Symbolen besprüht, was ihn zu einem mobilen Radweg machte. Die Aktiven ließen RadfahrerInnen, denen sie begegneten, mit La-Ola-Welle darüber fahren.</p>"
          />

          <img
            src="/images/07_04Fahrradteppich_1344.png"
            alt=""
            className="image"
          />

          <Headline level="3" levelStyle="3">
            Folgende Grundregeln sollten wir beachten, wenn wir
            Pressemitteilungen schreiben:
          </Headline>

          <Checklist
            items={[
              'Eine aussagekräftige <em>ÜBERSCHRIFT</em> muss her. Sie sollte den Kerninhalt des Haupttextes verdichten.',
              'Die Sätze sollten <em>KURZ, KLAR, AKTIV</em> formuliert und nicht verschachtelt sein. Keine Fremdwörter, kein Fachjargon.',
              'Pressemitteilungen werden wegen ihres <em>NEUIGKEITSWERTS</em> gelesen. Es muss sofort klar werden, was neu und besonders an unserem Vorhaben ist. Eine Einführung über die Auswirkungen des Klimawandels gehört nicht dazu.',
              'Wenn möglich und sinnvoll, können aktuell breit diskutierte Themen als <em>AUFHÄNGER</em> dienen. Beispiel: „Während Deutschland im Hitzesommer einen Vorgeschmack auf den Klimawandel erhält, fordert die Initiative...“',
              'Wir sollten nur ein Thema pro Pressemitteilung behandeln. Der Aufbau folgt den W-Fragen. Erst müssen die JournalistInnen verstehen, <em>WER WAS WANN</em> und <em>WO</em> macht. Dann <em>WIE</em> genau es passieren soll und schließlich <em>WARUM</em>. Der Text sollte, wie eine Zeitungsmeldung, theoretisch von hinten kürzbar sein.',
              'Wir lassen <em>ZITATE</em> einfließen, die einer Person zugeordnet sind. Diese Zitate sind auch ohne Kontext verständlich und nicht zu lang.',
              'Im Schlussteil kann es hilfreich sein, unser Anliegen in einen größeren politischen, aktivistischen oder gesellschaftlichen <em>KONTEXT</em> zu stellen.',
              'Wir geben den <em>KONTAKT</em> einer oder mehrerer gut erreichbarer SprecherInnen an.'
            ]}
            ordered
          />

          <img src="/images/07_05Stadium_1344.png" alt="" className="image" />

          <Headline level="2" levelStyle="2" underlined id="unterschriften">
            Unterschriften sammeln
          </Headline>

          <Paragraph
            text="Jedes Bürgerbegehren beginnt mit einer Unterschrift. Damit es noch viele mehr werden, müssen wir die Sammelaktionen gut organisieren."
            isIntro
          />

          <Checklist
            items={[
              'Bei der Gestaltung der <em>UNTERSCHRIFTENLISTEN</em> beachten wir die rechtlichen Anforderungen. Wichtig ist eine Adresse, zu der die volle Liste gebracht oder geschickt werden kann. Falls es eine Frist gibt, dürfen wir das Datum nicht vergessen.',
              'Wir führen die Sammelphase möglichst in der warmen <em>JAHRESZEIT</em> durch, wenn die Menschen draußen sind. Bei Radentscheiden ist dann zusätzlich die Betroffenheit größer.',
              'Wir kümmern uns darum, dass rechtzeitig zum Startschuss genügend Listen, Klemmbretter, Kugelschreiber, Flyer und Plakate vorrätig sind. Wenn wir zur dezentralen <em>MATERIALVERSORGUNG</em> über ein Lastenrad verfügen, können es die SammlerInnen auch wie einen mobilen Infostand nutzen.',
              'Wir sammeln frühzeitig Termine relevanter <em>VERANSTALTUNGEN</em>, besonders von Großevents wie Festivals und Messen.',
              'Mit ausreichend Vorlauf bitten wir unsere BündnispartnerInnen, uns bei der <em>VERBREITUNG</em> der Unterschriftenlisten zu unterstützen. Sie können die Listen an Mitglieder versenden, ihren Zeitschriften beilegen oder bei Veranstaltungen verteilen. Über ihre Digitalkanäle bieten sie Listen zum Download an und rufen dazu auf, Unterschriften zu sammeln.',
              'Vor allem am Anfang organisieren wir attraktive <em>KICKOFF-SAMMELAKTIONEN</em> damit die Leute Spaß am Sammeln entwickeln. Eine Person aus dem Bündnis ist als AnsprechpartnerIn dabei.',
              'Wir kümmern uns, wenn nötig, um die <em>ANMELDUNGEN</em> unserer Sammelaktionen und beantragen eventuell Infostände.',
              'Wir recherchieren <em>GESCHÄFTE</em>, in denen wir Unterschriftenlisten auslegen und eventuell Hinweisplakate im Eingangsbereich aufhängen dürfen. Bei Ladenketten sprechen wir die Zentrale an. Ehrenamtliche tauschen die Unterschriftenlisten aus und halten die BesitzerInnen auf dem Laufenden. UnterstützerInnen können hier volle Listen abgeben.',
              'Über den <em>NEWSLETTER</em> für die Aktiven informieren wir unsere Ehrenamtlichen über Möglichkeiten, uns zu unterstützen.',
              'Für die Mobilisierung zu Einsätzen per Telefon und Email führen wir eine Liste, auf der unsere <em>TOP-SAMMLERINNEN</em> stehen. Das sind die aktivsten Ehrenamtlichen, die andere Freiwillige motivieren und neue SammlerInnen an die Hand nehmen können.',
              'Für die <em>VERNETZUNG</em> der Aktiven sorgen wir mit einer Messenger-Gruppe oder Chat-Tools wie Slack. So können sie sich auch selbständig zum Sammeln verabreden.',
              'Wir verpacken die Zahl an notwendigen Unterschriften gegenüber den Ehrenamtlichen in erreichbare Pakete und setzen uns <em>ZIELMARKEN</em>. Oft ist zu Beginn des letzten Drittels im Zeitplan erst die Hälfte der Unterschriften eingetroffen. Davon lassen wir uns aber nicht entmutigen.',
              'Einen <em>ENDSPURT</em> auszurufen, motiviert die Aktiven zusätzlich und spornt Interessierte an, doch noch sammeln zu helfen.',
              'Das Büro der Landeswahlleitung bzw. der Kommunalverwaltung kann uns sagen, ob eine <em>KORREKTUR</em> der Eintragungen auf den Unterschriftenlisten möglich ist. Falls ja, recherchieren wir schlecht lesbare Einträge im Internet nach und ergänzen die Angaben.'
            ]}
          />

          <Headline level="3" levelStyle="3">
            „Bitte hier unterschreiben!“
          </Headline>

          <Checklist
            items={[
              'Wir sprechen die Leute dort an, wo sie ihre <em>FREIZEIT</em> verbringen, zum Beispiel auf dem Markt oder im Park. In Warteschlangen haben die Leute Zeit, sich unser Anliegen anzuhören.',
              'Orte für Menschen, die unserem THEMA gegenüber aufgeschlossen sind, funktionieren besonders gut. Ebenso Stadtbezirke, die aufgrund direkter Betroffenheit oder ihrer WählerInnenstruktur dem Anliegen positiv gegenüberstehen.',
              'Am <em>INFOSTAND</em> warten wir nicht darauf, dass die Leute zu uns kommen, sondern gehen auf sie zu, ohne aufdringlich zu sein.',
              'Als <em>GESPRÄCHSERÖFFNUNG</em> bietet sich die Frage an, ob die angesprochene Person aus der jeweiligen Stadt kommt. So wissen wir, ob sie berechtigt ist, für das Bürgerbegehren zu unterschreiben. Außerdem sind wir gleich mitten im Gespräch.',
              'Damit ein <em>SCHNEEBALL-EFFEKT</em> entsteht, bieten wir stets drei weitere Unterschriftenlisten zum Mitnehmen an. Wir schärfen den Leuten ein, sie frühestmöglich zurück in die Kampagnenzentrale zu schicken und geben eventuell gleich den passenden Fensterumschlag für die Rücksendung mit.',
              'Um alle nötigen <em>DATENSCHUTZ</em>-Anforderungen zu erfüllen, sammeln wir die Adressen an einem festen, abschließbaren Ort und geben sie nicht an Dritte weiter.',
              'Erfahrungsgemäß bekommen wir eine Unterschrift entweder nach einem Gespräch von etwa einer halben Minute – oder die Menschen brauchen noch Zeit, über das Thema nachzudenken. Falls die Diskussion nicht vom Fleck kommt, nutzen wir eine <em>EXIT-STRATEGIE</em>.'
            ]}
          />

          <img src="/images/07_05Stadium_1344.png" alt="" className="image" />

          <Infobox
            title="Den Klimawandel wegkicken"
            content="<p class='paragraph'>Die Volksinitiative „Tschüss Kohle“ in Hamburg konnte den Kiez-Fußballclub „FC St. Pauli“ als Partner gewinnen. Der Verein sponserte Tickets und erlaubte, in der Halbzeit, vor und nach dem Spiel Unterschriften zu sammeln. Wer wollte, konnte sich natürlich auch das Spiel anschauen. Auf den Rängen jubelten „PaulianerInnen“ und Aktive mit umgehängtem „Tschüss Kohle“-Plakat gemeinsam.</p>"
          />

          <Headline level="2" levelStyle="2" underlined id="betreuung">
            Aktive betreuen
          </Headline>

          <Paragraph
            text="Sich bei einem Bürgerbegehren zu engagieren bedeutet nicht nur, mit dem Klemmbrett durch Wind und Wetter zu marschieren. Sondern auch echte politische Gestaltungsmacht und bleibende Freundschaften. So sorgen wir dafür, dass Lust über Frust siegt."
            isIntro
          />

          <Checklist
            items={[
              'Ehrenamtliche <em>MITSTREITERINNEN</em> gewinnen wir über Aufrufe unserer Unterstützerorganisationen, Social Media, Kontaktlisten, die wir auf Demos und Aktionen herumreichen, oder indem wir unsere Kampagne auf <em>KLIMAWENDE.ORG</em> eintragen.',
              'Die Koordination von Sammelaktionen und die Betreuung der Ehrenamtlichen ist zeitaufwändig. Mindestens eine Person sollte verantwortlich und als <em>ANSPRECHPARTNERIN</em> bekannt sein. Diese Person ruft am besten alle neuen Aktiven an und macht konkrete Aktionsangebote. Wir erklären stets den Sinn und die Dringlichkeit jeder Aktion, für die wir Ehrenamtliche mobilisieren.',
              'Vor dem ersten Einsatz auf der Straße bieten wir UnterstützerInnen eine <em>SCHULUNG</em> an. Sie erhalten einen Handzettel mit den wichtigsten Argumenten. Außerdem vermitteln wir ihnen praktische Tipps.',
              'Barrieren für die Beteiligung abzubauen ist eine Frage des richtigen <em>SERVICE</em>. Wir bereiten etwa sinnvolle Termine und Einsatzorte für die Unterschriftensammlung vor. Beim Plakatieren stellen wir das notwendige Material und eine Standortliste zur Verfügung.',
              'Der <em>INFORMATIONSFLUSS</em> sollte in beide Richtungen funktionieren. Einerseits halten wir die Aktiven auf dem Laufenden, andererseits erkundigen wir uns regelmäßig, wie es läuft und wo es in der Praxis auf der Straße klemmt.',
              'Die Aktiven brauchen Spielraum, selbst Dinge auf die Beine zu stellen. Das geht nur, wenn sie das Recht zur <em>MITSPRACHE</em> haben und Vorschläge machen können.'
            ]}
          />

          <img
            src="/images/07_06Mitglieder_1344.png"
            alt=""
            className="image"
          />

          <Checklist
            items={[
              'Kleinigkeiten wie Schokolade und Getränke am Infostand sind das Geheimnis des <em>FEEL-GOOD-MANAGEMENT</em>. Wir schätzen jede Form des Engagements wert.',
              'Lockere Runden zum Austausch, zum Beispiel nach Sammelaktionen, fördern das <em>GEMEINSCHAFTSGEFÜHL</em>, die Vernetzung unter den Aktiven und die Bindung an die Kampagne. Wir feiern unsere Erfolge.'
            ]}
          />

          <Infobox
            title="Gemeinsamer Start"
            content="<p class='paragraph'>„Tschüss Kohle“ organisierte medienwirksam eine Auftaktveranstaltung, als das Bündnis die Volksinitiative im Rathaus anmeldete. Über die Bündnispartner und Email-Verteiler von Klima-Aktiven luden sie Interessierte ein, zu einer Fotoaktion für die Presse zum Rathaus zu kommen und dann direkt mit dem Unterschriftensammeln zu beginnen. Etwa 50 Leute kamen, lernten sich kennen und zogen gleich mit den Listen los.</p>"
          />

          <Headline level="2" levelStyle="2" underlined id="abstimmung">
            Zur Abstimmung mobilisieren
          </Headline>

          <Paragraph
            text="Die Abstimmung naht, aber wie kriegen wir die Menschen in die Wahllokale? Wenn wir nochmal alles geben und sie für unsere Idee begeistern, knacken wir das Quorum!"
            isIntro
          />

          <Checklist
            items={[
              'Schon bevor der Abstimmungstermin feststeht, planen wir mit den <em>UNTERSTÜTZERORGANISATIONEN</em>, wie sie bei der Mobilisierung helfen können.',
              'Wir sollten bei der Stadt anfragen, ob <em>OFFIZIELLE VERÖFFENTLICHUNGEN</em> geplant sind, etwa im Stadtanzeiger. Denn natürlich wollen auch wir dort unsere Sicht darstellen.',
              'Mit einer <em>„BRIEFWAHL-KAMPAGNE“</em> sollten wir gezielt auf diese Möglichkeit hinweisen. Unsere Unterstützerorganisationen können den Link zur Online-Beantragung der Wahlunterlagen über ihre digitalen Kanäle versenden.',
              'Wir erstellen <em>FLYER</em> mit einer Ankündigung des Abstimmungstermins und den wichtigsten Fakten und Argumenten.',
              'Der <em>HAUSTÜRWAHLKAMPF</em> kann ein Instrument sein, um Menschen persönlich und damit verbindlicher an die nahende Abstimmung zu erinnern. Wo niemand zu Hause ist, werfen wir Flyer in die Briefkästen oder lassen Türhänger an der Türklinke.',
              'Bei <em>INFOVERANSTALTUNGEN</em> und Podiumsdiskussionen, möglichst mit prominenten TeilnehmerInnen, können die Leute diskutieren und sich eine Meinung bilden.',
              'Wenn wir guten Kontakt zu einer Partei haben, können wir eventuell deren Wahlplakatständer nutzen und großflächig <em>PLAKATWERBUNG</em> für den Abstimmungstermin machen.'
            ]}
          />

          <img src="/images/07_07Material_1344.png" alt="" className="image" />
        </div>

        <div className="so-gehts__body-action-container">
          <TableOfContents
            items={[
              {
                title: 'Ein Bündnis gründen',
                target: '#buendnis'
              },

              {
                title: 'Eine Website entwerfen',
                target: '#website'
              },

              {
                title: 'Soziale Netzwerke nutzen',
                target: '#soziale-netzwerke'
              },

              {
                title: 'Expertise aufbauen',
                target: '#expertise'
              },

              {
                title: 'Mit der Presse sprechen',
                target: '#presse'
              },

              {
                title: 'Unterschriften sammeln',
                target: '#unterschriften'
              },

              {
                title: 'Aktive betreuen',
                target: '#betreuung'
              },

              {
                title: 'Zur Absstimmung mobilisieren',
                target: '#abstimmung'
              }
            ]}
          />
        </div>
      </Constraint>
    </section>
  </div>
);

export default withLayout('Erfolgreich mobilisieren', Page);

export const query = graphql`
  query {
    content: pagesJson(id: { eq: "erfolgreich-mobilisieren" }) {
      id
      title
      intro
      image {
        src
        alt
      }
    }
  }
`;
