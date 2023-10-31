export function testSuite({ assert, funcs, APP }) {
  function nit(description, callback) {
    it(description, function () {
      if (typeof window === "undefined") {
        this.skip()
      } else {
        callback()
      }
    })
  }

  if (APP.type === "sort") {
    describe("Bubble Sort", function () {
      it("Die Funktion 'bubbleSort()' soll existieren", function () {
        assert.equal(typeof funcs.bubbleSort, "function")
      })
      it("Sollte den Text sortieren", function () {
        const input = "cdefab"
        const res = funcs.bubbleSort(input)
        assert.equal(res, "abcdef")
      })
      it("Sollte Grossbuchstaben for Kleinbuchstaben haben", function () {
        const input = "aAbCdEEe"
        const res = funcs.bubbleSort(input)
        assert.equal(res, "ACEEabde")
      })
    })
  } else if (APP.type === "palindrom") {
    describe("Palindrome", function () {
      it("Die Funktion 'checkPalindrom()' soll existieren", function () {
        assert.equal(typeof funcs.checkPalindrom, "function")
      })
      it("Anna ist ein Palindrom", function () {
        const input = "Anna"
        const res = funcs.checkPalindrom(input)
        assert.equal(res, true)
      })
      it("'An a' ist ein Palindrom", function () {
        const input = "An a"
        const res = funcs.checkPalindrom(input)
        assert.equal(res, true)
      })
      it("'Hanna' ist kein Palindrom", function () {
        const input = "Hanna"
        const res = funcs.checkPalindrom(input)
        assert.equal(res, false)
      })
    })
  } else {
    describe("Aufgabe 01", function () {
      it("Die Funktion 'aufgabe01()' soll existieren", function () {
        assert.equal(typeof funcs.aufgabe01, "function")
      })
      it("Sollte keine 'e's mehr drin haben", function () {
        const input = "Hello"
        const res = funcs.aufgabe01(input)
        assert.equal(res, "Hllo")
      })
      it("Sollte keine 'E's mehr drin haben", function () {
        const input = "Emoji"
        const res = funcs.aufgabe01(input)
        assert.equal(res, "moji")
      })
      it("Sollte mehrere 'e's löschen", function () {
        const input = "Hier hat es mehrere 'e's drin."
        const res = funcs.aufgabe01(input)
        assert.equal(res, "Hir hat s mhrr ''s drin.")
      })
    })

    describe("Aufgabe 02", function () {
      it("Die Funktion 'aufgabe02()' soll existieren", function () {
        assert.equal(typeof funcs.aufgabe02, "function")
      })
      it("Sollte nur noch Grossbuchstaben enthalten", function () {
        const input = "a"
        const res = funcs.aufgabe02(input)
        assert.equal(res, "A")
      })
      it("Sollte mehrere Buchstaben gross schreiben", function () {
        const input = "abc"
        const res = funcs.aufgabe02(input)
        assert.equal(res, "ABC")
      })
      it("Sollten Grossbuchstaben bleiben", function () {
        const input = "aBc"
        const res = funcs.aufgabe02(input)
        assert.equal(res, "ABC")
      })
      it("Kann auch mit Sonderzeichen umgehen", function () {
        const input = "Hier ist ein Satz mit mehreren Zeichen."
        const res = funcs.aufgabe02(input)
        assert.equal(res, "HIER IST EIN SATZ MIT MEHREREN ZEICHEN.")
      })
    })

    describe("Aufgabe 03", function () {
      it("Die Funktion 'aufgabe03()' soll existieren", function () {
        assert.equal(typeof funcs.aufgabe03, "function")
      })
      it("Sollte 1 'e' enthalten", function () {
        const input = "Hello"
        const res = funcs.aufgabe03(input)
        assert.equal(res, 1)
      })
      it("Sollte 4 'e's enthalten", function () {
        const input = "ein einfacher Text."
        const res = funcs.aufgabe03(input)
        assert.equal(res, 4)
      })
      it("Sollte auch 'E's zählen", function () {
        const input = "Ein einfacher Text."
        const res = funcs.aufgabe03(input)
        assert.equal(res, 4)
      })
    })

    describe("Aufgabe 04", function () {
      it("Die Funktion 'aufgabe04()' soll existieren", function () {
        assert.equal(typeof funcs.aufgabe04, "function")
      })
      it("Sollte 2 Wörter zählen", function () {
        const input = "Zwei Wörter"
        const res = funcs.aufgabe04(input)
        assert.equal(res, 2)
      })
      it("Sollte 4 Wörter zählen", function () {
        const input = "Nur vier Wörter hier."
        const res = funcs.aufgabe04(input)
        assert.equal(res, 4)
      })
      it("Kann auch mit Sonderzeichen umgehen", function () {
        const input =
          "Nicht alles - was von Leerzeichen getrennt wird, sind Wörter..."
        const res = funcs.aufgabe04(input)
        assert.equal(res, 9)
      })
      it("Zählt auch Zahlen als Wörter", function () {
        const input = "Nur vier Wörter hier."
        const res = funcs.aufgabe04(input)
        assert.equal(res, 4)
      })
    })
    describe("Aufgabe 05", function () {
      it("Die Funktion 'aufgabe05()' soll existieren", function () {
        assert.equal(typeof funcs.aufgabe05, "function")
      })
      it("Sollte keine Grossbuchstaben enthalten", function () {
        const input = "hier ist alles klein...."
        const res = funcs.aufgabe05(input)
        assert.equal(res, false)
      })
      it("Sollte genau ein Grossbuchstabe erkennen", function () {
        const input = "Hier ist nur der anfang gross!"
        const res = funcs.aufgabe05(input)
        assert.equal(res, true)
      })
      it("Sollte auch mehrere Grossbuchstaben erkennen", function () {
        const input = "Hier ist mehr wie nur der Anfang gross."
        const res = funcs.aufgabe05(input)
        assert.equal(res, true)
      })
      it("Sollte auch gehen wenn nicht der erste Buchstabe gross ist", function () {
        const input = "abcdEEEfg"
        const res = funcs.aufgabe05(input)
        assert.equal(res, true)
      })
      it("Sollte bei nur Sonderzeichen 'falsch' sein", function () {
        const input = "1 + 2 - 4 = -1"
        const res = funcs.aufgabe05(input)
        assert.equal(res, false)
      })
      it("Sollte 'falsch' sein für den leeren String", function () {
        const input = ""
        const res = funcs.aufgabe05(input)
        assert.equal(res, false)
      })
    })
    describe("Aufgabe 06", function () {
      it("Die Funktion 'aufgabe06()' soll existieren", function () {
        assert.equal(typeof funcs.aufgabe06, "function")
      })
      it("Sollte keine Sonderzeichen enthalten", function () {
        const input = "abc"
        const res = funcs.aufgabe06(input)
        assert.equal(res, false)
      })
      it("Das Leerzeichen wird nicht als Sonderzeichen erkannt", function () {
        const input = "Ohne Sonderzeichen"
        const res = funcs.aufgabe06(input)
        assert.equal(res, false)
      })
      it("Punkte sind Sonderzeichen", function () {
        const input = "Hier gibt es ein Sonderzeichen."
        const res = funcs.aufgabe06(input)
        assert.equal(res, true)
      })
      it("Sollte den leeren String nicht als Sonderzeichen erkennen", function () {
        const input = ""
        const res = funcs.aufgabe06(input)
        assert.equal(res, false)
      })
      it("Sollte Sonderzeichen mitten im Text erkennen", function () {
        const input = "Hey! Hier sind mehr wie ein Sonderzeichen."
        const res = funcs.aufgabe06(input)
        assert.equal(res, true)
      })
    })
    describe("Aufgabe 07", function () {
      it("Die Funktion 'aufgabe07()' soll existieren", function () {
        assert.equal(typeof funcs.aufgabe07, "function")
      })
      it("Sollte das Wort 'und' nicht enthalten", function () {
        const input = "and"
        const res = funcs.aufgabe07(input)
        assert.equal(res, false)
      })
      it("Sollte das Wort 'und' erkennen", function () {
        const input = "und"
        const res = funcs.aufgabe07(input)
        assert.equal(res, true)
      })
      it("Sollte 'Und' am Satzanfang finden", function () {
        const input = "Und hier ist auch ein und."
        const res = funcs.aufgabe07(input)
        assert.equal(res, true)
      })
      it("Sollte 'Und' nicht erkennen wenn es nicht am Satzanfang ist", function () {
        const input = "Hier ist ein falsches Und."
        const res = funcs.function07(input)
        assert.equal(res, false)
      })
    })
    describe("Aufgabe 08", function () {
      it("Die Funktion 'aufgabe08()' soll existieren", function () {
        assert.equal(typeof funcs.aufgabe08, "function")
      })
      it("Sollte 'e's mit '3' ersetzen", function () {
        const input = "e"
        const res = funcs.aufgabe08(input)
        assert.equal(res, "3")
      })
      it("Sollte mehrere 'e's mit '3' ersetzen", function () {
        const input = "abcdeeefgh"
        const res = funcs.aufgabe08(input)
        assert.equal(res, "abcd333fgh")
      })
      it("Sollte grosse 'E's nicht ersetzen", function () {
        const input = "ABCDEEEFGH"
        const res = funcs.aufgabe08(input)
        assert.equal(res, "ABCDEEEFGH")
      })
    })

    describe("Aufgabe 09", function () {
      it("Die Funktion 'aufgabe09()' soll existieren", function () {
        assert.equal(typeof funcs.aufgabe09, "function")
      })
      it("Sollte keine 6 Zeichen lang sein", function () {
        const input = "abcd"
        const res = funcs.aufgabe09(input)
        assert.equal(res, false)
      })
      it("Sollte genau 6 zeichen lang sein", function () {
        const input = "abcdef"
        const res = funcs.aufgabe09(input)
        assert.equal(res, true)
      })
      it("Sollte länger wie 6 Zeichen lang sein", function () {
        const input = "abcdefghijkl"
        const res = funcs.aufgabe09(input)
        assert.equal(res, false)
      })
      it("Sollte auch Leerzeichen zählen", function () {
        const input = "abc de"
        const res = funcs.aufgabe09(input)
        assert.equal(res, true)
      })
    })

    describe("Aufgabe 10", function () {
      it("Die Funktion 'aufgabe10()' soll existieren", function () {
        assert.equal(typeof funcs.aufgabe10, "function")
      })
      it("Sollte kein korrekter RGB Hexcode sein", function () {
        const input = "#FF009G"
        const res = funcs.aufgabe10(input)
        assert.equal(res, false)
      })
      it("Sollte ein korrekter Code sein", function () {
        const input = "#FF0077"
        const res = funcs.aufgabe10(input)
        assert.equal(res, true)
      })
      it("Sollte die Farbe 'rot' in Hexadezimal erkennen", function () {
        const input = "#FF0000"
        const res = funcs.aufgabe10(input)
        assert.equal(res, true)
      })
      it("Sollte die Farbe 'grün' in Hexadezimal erkennen", function () {
        const input = "#00FF00"
        const res = funcs.aufgabe10(input)
        assert.equal(res, true)
      })
      it("Sollte die Farbe 'blau' in Hexadezimal erkennen", function () {
        const input = "#0000FF"
        const res = funcs.aufgabe10(input)
        assert.equal(res, true)
      })
      it("Sollte die Farbe 'gelb' in Hexadezimal erkennen", function () {
        const input = "#FF00FF"
        const res = funcs.aufgabe10(input)
        assert.equal(res, true)
      })
      it("Sollte kein Hexcode sein wenn der Hash fehlt", function () {
        const input = "FF0077"
        const res = funcs.aufgabe10(input)
        assert.equal(res, false)
      })
    })

    describe("Aufgabe 11", function () {
      it("Die Funktion 'aufgabe11()' soll existieren", function () {
        assert.equal(typeof funcs.aufgabe11, "function")
      })
      it("Sollte den ASCII-Code von 'a' erkennen", function () {
        const input = "a"
        const res = funcs.aufgabe11(input)
        assert.equal(res, 97)
      })
      it("Sollte den ASCII-Code von 'B' erkennen", function () {
        const input = "B"
        const res = funcs.aufgabe11(input)
        assert.equal(res, 66)
      })
      it("Sollte 'null' zurückgeben wenn mehr wie ein Zeichen gegeben sind", function () {
        const input = "aB"
        const res = funcs.aufgabe11(input)
        assert.equal(res, null)
      })
      it("Sollte 'null' zurückgeben wenn keine Eingabe gegeben ist", function () {
        const input = ""
        const res = funcs.aufgabe11(input)
        assert.equal(res, null)
      })
    })
    describe("Aufgabe 12", function () {
      it("Die Funktion 'aufgabe12()' soll existieren", function () {
        assert.equal(typeof funcs.aufgabe12, "function")
      })
      it("Sollte eine 'e' an der Position 0 finden", function () {
        const input = "ein Text"
        const res = funcs.aufgabe12(input)
        assert.equal(res, 0)
      })
      it("Sollte eine 'e' an der Position 5 finden", function () {
        const input = "Ein Text"
        const res = funcs.aufgabe12(input)
        assert.equal(res, 5)
      })
      it("Sollte -1 zurückgeben wenn kein 'e' vorkommt", function () {
        const input = "abcdfgh"
        const res = funcs.aufgabe12(input)
        assert.equal(res, -1)
      })
    })
    describe("Aufgabe 13", function () {
      it("Die Funktion 'aufgabe13()' soll existieren", function () {
        assert.equal(typeof funcs.aufgabe13, "function")
      })
      it("Sollte die letzte Position finden, an der ein 'e' steht", function () {
        const input = "eine"
        const res = funcs.aufgabe13(input)
        assert.equal(res, 3)
      })
      it("Sollte -1 zurückgeben wenn kein 'e' vorkommt", function () {
        const input = "nichts"
        const res = funcs.aufgabe13(input)
        assert.equal(res, -1)
      })
    })
    describe("Aufgabe 14", function () {
      it("Die Funktion 'aufgabe14()' soll existieren", function () {
        assert.equal(typeof funcs.aufgabe14, "function")
      })
      it("Sollte -1 geben, da nicht genügend 'e's vorkommen", function () {
        const input = "abcdefge"
        const res = funcs.aufgabe14(input)
        assert.equal(res, -1)
      })
      it("Sollte 2 zurückgeben, da nur 'e's vorkommen", function () {
        const input = "eeeeeeee"
        const res = funcs.aufgabe14(input)
        assert.equal(res, 2)
      })
      it("Sollte Leerzeichen beachten und auch mitzählen", function () {
        const input = "Hier ist mehr Text mit vielen 'e's"
        const res = funcs.aufgabe14(input)
        assert.equal(res, 15)
      })
      it("Sollte nicht auf grosse 'E's reagieren", function () {
        const input = "EEEEeEee"
        const res = funcs.aufgabe14(input)
        assert.equal(res, 7)
      })
    })

    describe("Aufgabe 15", function () {
      it("Die Funktion 'aufgabe15()' soll existieren", function () {
        assert.equal(typeof funcs.aufgabe15, "function")
      })
      it("Sollte nach dem ersten ' ' abbrechen", function () {
        const input = "Hier ist langer Text"
        const res = funcs.aufgabe15(input)
        assert.equal(res, "Hier")
      })
      it("Sollte leer sein wenn es mit einem Leerschlag beginnt", function () {
        const input = " nichts"
        const res = funcs.aufgabe15(input)
        assert.equal(res, "")
      })
      it("Sollte '_' ganz normal lesen", function () {
        const input = "Hier_ist_langer_Text."
        const res = funcs.aufgabe15(input)
        assert.equal(res, "Hier_ist_langer_Text.")
      })
      it("Sollte das Leerzeichen am Ende nicht mitnehmen", function () {
        const input = "Ohne Leerzeichen "
        const res = funcs.aufgabe15(input)
        assert.equal(res, "Ohne Leerzeichen")
      })
    })
    describe("Aufgabe 16", function () {
      it("Die Funktion 'aufgabe16()' soll existieren", function () {
        assert.equal(typeof funcs.aufgabe16, "function")
      })
      it("Sollte nichts einlesen", function () {
        const input = "$alles wird ignoriert."
        const res = funcs.aufgabe16(input)
        assert.equal(res, ["", "alles wird ignoriert."])
      })
      it("Sollte alles einlesen", function () {
        const input = "alles wird eingelesen$"
        const res = funcs.aufgabe16(input)
        assert.equal(res, ["alles wird eingelesen"])
      })
      it("Sollte nur einen Teil einlesen", function () {
        const input = "Sollte nur bis hier$einlesen."
        const res = funcs.aufgabe16(input)
        assert.equal(res, ["Sollte nur bis hier", "einlesen."])
      })
      it("Sollte leer sein", function () {
        const input = ""
        const res = funcs.aufgabe16(input)
        assert.equal(res, [""])
      })
      it("Sollte alles einlesen", function () {
        const input = "alles"
        const res = funcs.aufgabe16(input)
        assert.equal(res, ["alles"])
      })
      it("Sollte nur 2 Einträge in der Liste haben", function () {
        const input = "eins$zwei$drei"
        const res = funcs.aufgabe16(input)
        assert.equal(res, ["eins", "zwei$drei"])
      })
    })
    describe("Aufgabe 17", function () {
      it("Die Funktion 'aufgabe17()' soll existieren", function () {
        assert.equal(typeof funcs.aufgabe17, "function")
      })
      it("Sollte eine Liste mit dem leeren Element haben", function () {
        const input = ""
        const res = funcs.aufgabe17(input)
        assert.equal(res, [""])
      })
      it("Sollte eine Liste mit nur einem Eintrag haben", function () {
        const input = "nur ein Eintrag"
        const res = funcs.aufgabe17(input)
        assert.equal(res, ["nur ein Eintrag"])
      })
      it("Sollte 2 Einträge haben", function () {
        const input = "eins,zwei"
        const res = funcs.aufgabe17(input)
        assert.equal(res, ["eins", "zwei"])
      })
      it("Sollte 3 Einträge haben", function () {
        const input = "eins,zwei,drei"
        const res = funcs.aufgabe17(input)
        assert.equal(res, ["eins", "zwei", "drei"])
      })
      it("Sollte nur 2 Einträge haben", function () {
        const input = "eins,zwei,"
        const res = funcs.aufgabe17(input)
        assert.equal(res, ["eins", "zwei"])
      })
    })
    describe("Aufgabe 18", function () {
      it("Die Funktion 'aufgabe18()' soll existieren", function () {
        assert.equal(typeof funcs.aufgabe18, "function")
      })
      it("Sollte 'Sie heissen Julia und sind 17 Jahre alt' schreiben", function () {
        const input = "Julia 17"
        const res = funcs.aufgabe18(input)
        assert.equal(res, "Sie heissen Julia und sind 17 Jahre alt")
      })
      it("Sollte 'Sie heissen 17 und sind Julia Jahre alt' schreiben", function () {
        const input = "17 Julia"
        const res = funcs.aufgabe18(input)
        assert.equal(res, "Sie heissen 17 und sind Julia Jahre alt")
      })
      it("Sollte 'Sie heissen und sind 17 Jahre alt' schreiben", function () {
        const input = " 17"
        const res = funcs.aufgabe18(input)
        assert.equal(res, "Sie heissen und sind 17 Jahre alt")
      })
      it("Sollte 'Sie heissen Julia und sind Jahre alt' schreiben", function () {
        const input = "Julia"
        const res = funcs.aufgabe18(input)
        assert.equal(res, "Sie heissen Julia und sind Jahre alt")
      })
    })
    describe("Aufgabe 19", function () {
      it("Die Funktion 'aufgabe19()' soll existieren", function () {
        assert.equal(typeof funcs.aufgabe19, "function")
      })
      it("Sollte immernoch leer sein", function () {
        const input = ""
        const res = funcs.aufgabe19(input)
        assert.equal(res, "")
      })
      it("Sollte 'aa' heissen", function () {
        const input = "a"
        const res = funcs.aufgabe19(input)
        assert.equal(res, "aa")
      })
      it("Sollte mehrere Zeichen verdoppeln", function () {
        const input = "ab cde"
        const res = funcs.aufgabe19(input)
        assert.equal(res, "aabb  ccddee")
      })
    })
    describe("Aufgabe 20", function () {
      it("Die Funktion 'aufgabe20()' soll existieren", function () {
        assert.equal(typeof funcs.aufgabe20, "function")
      })
      it("Sollte 'false' sein", function () {
        const input = "So nicht.Es braucht hier einen Leerschlag"
        const res = funcs.aufgabe20(input)
        assert.equal(res, false)
      })
      it("Sollte 'true' sein", function () {
        const input = "So gehts. Nach einem Punkt kommt ein Leerzeichen"
        const res = funcs.aufgabe20(input)
        assert.equal(res, true)
      })
      it("Auch am Ende braucht es einen Leerschlag", function () {
        const input = "Auch am Ende."
        const res = funcs.aufgabe20(input)
        assert.equal(res, false)
      })
      it("Am Ende richtig", function () {
        const input = "Auch am Ende. "
        const res = funcs.aufgabe20(input)
        assert.equal(res, true)
      })
    })
    describe("Aufgabe 21", function () {
      it("Die Funktion 'aufgabe21()' soll existieren", function () {
        assert.equal(typeof funcs.aufgabe21, "function")
      })
      it("Sollte leer bleiben", function () {
        const input = ""
        const res = funcs.aufgabe21(input)
        assert.equal(res, "")
      })
      it("Sollte ein einzelnes Zeichen behalten", function () {
        const input = "a"
        const res = funcs.aufgabe21(input)
        assert.equal(res, "a")
      })
      it("Sollte mehrere gleiche Zeichen behalten", function () {
        const input = "aaaa"
        const res = funcs.aufgabe21(input)
        assert.equal(res, "aaaa")
      })
      it("Sollte Grossbuchstaben unterscheiden", function () {
        const input = "aAaa"
        const res = funcs.aufgabe21(input)
        assert.equal(res, "aaAa")
      })
    })
    describe("Aufgabe 22", function () {
      it("Die Funktion 'aufgabe22()' soll existieren", function () {
        assert.equal(typeof funcs.aufgabe22, "function")
      })
      it("Sollte alles ersetzen", function () {
        const input = "Alles weg..."
        const res = funcs.aufgabe22(input)
        assert.equal(res, "____________")
      })
      it("Sollte einen Teil ersetzen", function () {
        const input = "alles bis kier ist weg"
        const res = funcs.aufgabe22(input)
        assert.equal(res, "__________kier ist weg")
      })
      it("Sollte nichts ersetzen", function () {
        const input = "keine Unterstriche..."
        const res = funcs.aufgabe22(input)
        assert.equal(res, "keine Unterstriche...")
      })
    })
    describe("Aufgabe 23", function () {
      it("Die Funktion 'aufgabe23()' soll existieren", function () {
        assert.equal(typeof funcs.aufgabe23, "function")
      })
      it("Bleibt leer", function () {
        const input = ""
        const res = funcs.aufgabe23(input)
        assert.equal(res, "")
      })
      it("Verdoppelt das erste Zeichen", function () {
        const input = "a"
        const res = funcs.aufgabe23(input)
        assert.equal(res, "aaa")
      })
      it("Verdoppelt das erste Zeichen", function () {
        const input = "abc"
        const res = funcs.aufgabe23(input)
        assert.equal(res, "aabca")
      })
    })
    describe("Aufgabe 24", function () {
      it("Die Funktion 'aufgabe24()' soll existieren", function () {
        assert.equal(typeof funcs.aufgabe24, "function")
      })
      it("Sollte leer bleiben", function () {
        const input = ""
        const res = funcs.aufgabe24(input)
        assert.equal(res, "")
      })
      it("Sollte gleich bleiben", function () {
        const input = "a"
        const res = funcs.aufgabe24(input)
        assert.equal(res, "a")
      })
      it("Sollte gleich bleiben", function () {
        const input = "aa"
        const res = funcs.aufgabe24(input)
        assert.equal(res, "aa")
      })
      it("Sollte vertauschen", function () {
        const input = "ab"
        const res = funcs.aufgabe24(input)
        assert.equal(res, "ba")
      })
      it("Sollte nur den Anfang und Schluss vertauschen", function () {
        const input = "abcdef"
        const res = funcs.aufgabe24(input)
        assert.equal(res, "fbcdea")
      })
      it("Sollte auch Leerzeichen vertauschen", function () {
        const input = "abcd "
        const res = funcs.aufgabe24(input)
        assert.equal(res, " bcda")
      })
    })
    describe("Aufgabe 25", function () {
      it("Die Funktion 'aufgabe25()' soll existieren", function () {
        assert.equal(typeof funcs.aufgabe25, "function")
      })
      it("Sollte leer bleiben", function () {
        const input = ""
        const res = funcs.aufgabe25(input)
        assert.equal(res, "")
      })
      it("Soll leer werden", function () {
        const input = "a"
        const res = funcs.aufgabe25(input)
        assert.equal(res, "")
      })
      it("Soll leer werden", function () {
        const input = "aa"
        const res = funcs.aufgabe25(input)
        assert.equal(res, "")
      })
      it("Soll 1 Zeichen löschen", function () {
        const input = "abc"
        const res = funcs.aufgabe25(input)
        assert.equal(res, "ac")
      })
      it("Soll 2 Zeichen löschen", function () {
        const input = "abcd"
        const res = funcs.aufgabe25(input)
        assert.equal(res, "ad")
      })
      it("Soll gleiche Zeichen separat behandeln", function () {
        const input = "abbc"
        const res = funcs.aufgabe25(input)
        assert.equal(res, "ac")
      })
    })
    describe("Aufgabe 26", function () {
      it("Die Funktion 'aufgabe26()' soll existieren", function () {
        assert.equal(typeof funcs.aufgabe26, "function")
      })
      it("Soll die ersten beiden Zeichen so lassen", function () {
        const input = "abcde"
        const res = funcs.aufgabe26(input)
        assert.equal(res, "abcde")
      })
      it("Soll die ersten beiden Zeichen vertauschen", function () {
        const input = "bacdef"
        const res = funcs.aufgabe26(input)
        assert.equal(res, "abcdef")
      })
      it("Soll Grossbuchstaben nach vorne nehmen", function () {
        const input = "aAbcdef"
        const res = funcs.aufgabe26(input)
        assert.equal(res, "Aabcdef")
      })
    })

    describe("Aufgabe 27", function () {
      it("Die Funktion 'aufgabe27()' soll existieren", function () {
        assert.equal(typeof funcs.aufgabe27, "function")
      })
      it("Sollte eine Zahl sein", function () {
        const input = "12"
        const res = funcs.aufgabe27(input)
        assert.equal(res, true)
      })
      it("Sollte keine Zahl sein", function () {
        const input = "1 2"
        const res = funcs.aufgabe27(input)
        assert.equal(res, false)
      })
      it("Sollte keine Zahl sein", function () {
        const input = ""
        const res = funcs.aufgabe27(input)
        assert.equal(res, false)
      })
      it("Sollte keine Zahl sein", function () {
        const input = "zwei"
        const res = funcs.aufgabe27(input)
        assert.equal(res, false)
      })
      it("Sollte kein Leerzeichen am Anfang haben", function () {
        const input = " 12"
        const res = funcs.aufgabe27(input)
        assert.equal(res, false)
      })
      it("Sollte kein Leerzeichen am Ende haben", function () {
        const input = "10 "
        const res = funcs.aufgabe27(input)
        assert.equal(res, false)
      })
      it("Soll nur ganze Zahlen lesen", function () {
        const input = "27.1"
        const res = funcs.aufgabe27(input)
        assert.equal(res, false)
      })
    })
    describe("Aufgabe 28", function () {
      it("Die Funktion 'aufgabe28()' soll existieren", function () {
        assert.equal(typeof funcs.aufgabe28, "function")
      })
      it("Sollte 2 Zahlen haben, und diese addieren", function () {
        const input = "3 8"
        const res = funcs.aufgabe28(input)
        assert.equal(res, 11)
      })
      it("Sollte nur auf Leerzeichen reagieren", function () {
        const input = "3 + 2"
        const res = funcs.aufgabe28(input)
        assert.equal(res, null)
      })
      it("Sollte auch mit mehrstelligen Zahlen rechnen", function () {
        const input = "12 600"
        const res = funcs.aufgabe28(input)
        assert.equal(res, 612)
      })
    })
  }
}
