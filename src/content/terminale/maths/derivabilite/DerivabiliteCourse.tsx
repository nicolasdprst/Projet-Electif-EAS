import React from 'react';

export default function DerivabiliteCourse() {
  return (
    <>
      <p className="course-text">
        Dans tout ce chapitre, on définit {"\\(I\\)"} et {"\\(J\\)"} comme des intervalles de {"\\(\\mathbb{R}\\)"}.
      </p>

      <h2 className="section-title">1. Définitions</h2>

      <p className="course-text">Soient {"\\(a \\in I\\)"} et {"\\(f : I \\mapsto \\mathbb{R}\\)"} :</p>

      <div className="box definition-box">
        <h4>Rappel (Taux d'accroissement).</h4>
        <p className="course-text">On appelle taux d'accroissement de la fonction {"\\(f\\)"} en {"\\(a\\)"}, la fonction {"\\(\\Delta\\)"} définie par :</p>
        <div className="formula-box">
          {"\\[ \\begin{aligned} \\Delta : I \\setminus \\{a\\} &\\to \\mathbb{R} \\\\ x &\\mapsto \\frac{f(x)-f(a)}{x-a} \\end{aligned} \\]"}
        </div>
      </div>

      <div className="box definition-box">
        <h4>Définition 2 (Dérivabilité en un point).</h4>
        <p className="course-text">On dit que {"\\(f\\)"} est dérivable en {"\\(a\\)"} si :</p>
        <div className="formula-box">
          {"\\[ \\lim_{x \\to a} \\frac{f(x)-f(a)}{x-a} \\text{ existe ET est finie} \\]"}
        </div>
        <p className="course-text" style={{marginBottom: 0}}>Autrement dit, il faut que la limite du taux d'accroissement de {"\\(f\\)"} en {"\\(a\\)"} existe et soit finie. Ce nombre est appelé nombre dérivé de {"\\(f\\)"} en {"\\(a\\)"} et est noté {"\\(f'(a)\\)"}.</p>
      </div>
      
      <div className="box proposition-box">
        <h4>Interprétation graphique.</h4>
        <p className="course-text">Si {"\\(\\displaystyle\\lim_{x \\to a} \\frac{f(x)-f(a)}{x-a}\\)"} est finie, alors la droite d'équation {"\\(y=f'(a) (x-a) + f(a)\\)"} est appelée tangente de {"\\(f\\)"} en {"\\(a\\)"}.</p>
        <p className="course-text" style={{marginBottom: 0}}>Dans le cas où {"\\(\\displaystyle\\lim_{x \\to a} \\frac{f(x)-f(a)}{x-a} = \\pm \\infty\\)"}, la droite d'équation {"\\(x=a\\)"} est appelée tangente de {"\\(f\\)"} en {"\\(a\\)"}.</p>
      </div>

      <p className="course-text">Graphiquement, comme {"\\(f'(a)\\)"} représente le coefficient directeur de la tangente en {"\\(a\\)"} de {"\\(f\\)"}, on a bien deux cas :</p>

      <div className="image-container" style={{display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'space-around'}}>
        <div style={{maxWidth: '45%'}}>
          <img src="/images/cours/sqrt(x).png" alt="Graphique de la fonction racine carrée non dérivable à l'origine" className="course-image" />
          <p className="image-caption">
            <strong>Figure 1.</strong> {"\\(x \\mapsto \\sqrt{x}\\)"}
          </p>
        </div>
        <div style={{maxWidth: '45%'}}>
          <img src="/images/cours/x2.png" alt="Graphique de la fonction carrée dérivable" className="course-image" />
          <p className="image-caption">
            <strong>Figure 2.</strong> {"\\(x \\mapsto x^2\\)"}
          </p>
        </div>
      </div>
      
      <p className="course-text">
        Dans le cas de {"\\(x \\mapsto \\sqrt{x}\\)"}, le coefficient directeur de la tangente en 0 vaut {"\\(+\\infty\\)"}, donc cette fonction n'est pas dérivable en 0. Néanmoins, pour {"\\(x \\mapsto x^2\\)"}, le coefficient directeur est fini, donc cette fonction est dérivable en 1.
      </p>

      <h2 className="section-title">2. Opérations sur les fonctions dérivables</h2>

      <p className="course-text">On s'intéresse désormais aux différentes propriétés de la dérivée.</p>

      <div className="box proposition-box">
        <h4>Propriété 3 (Opérations usuelles).</h4>
        <p className="course-text">Pour {"\\(f:I \\to \\mathbb{R}\\)"}, {"\\(g:I \\to \\mathbb{R}\\)"} dérivables et {"\\(a \\in I\\)"} :</p>
        <ul className="list-disc ml-6 text-sm text-gray-700 space-y-2">
          <li><strong>Addition :</strong> {"\\(f+g\\)"} est dérivable en {"\\(a\\)"} et :
           {"\\[ (f+g)'(a) = f'(a) + g'(a) \\]"}
          </li>
          <li><strong>Combinaison linéaire :</strong> En généralisant, pour {"\\(\\lambda\\)"} et {"\\(\\beta\\)"} deux réels, {"\\(\\lambda f + \\beta g\\)"} est dérivable en {"\\(a\\)"} et :
           {"\\[ (\\lambda f + \\beta g)'(a) = \\lambda f'(a) + \\beta g'(a) \\]"}
          </li>
          <li><strong>Multiplication :</strong> {"\\(fg\\)"} est dérivable en {"\\(a\\)"} et :
           {"\\[ (fg)'(a) = f'(a) g(a) + f(a) g'(a) \\]"}
          </li>
          <li><strong>Quotient :</strong> Si <strong>{"\\(g(a)\\)"} est non nul</strong>, alors {"\\(\\frac{f}{g}\\)"} est dérivable en {"\\(a\\)"} et :
           {"\\[ \\left(\\frac{f}{g}\\right)'(a) = \\frac{f'g-fg'}{g^2} \\]"}
          </li>
        </ul>
      </div>

      <div className="box example-box">
        <h4>Exemple 1.</h4>
        <p className="course-text" style={{marginBottom: 0}}>Considérons la fonction {"\\(f : x \\mapsto e^{2x}\\)"}. Déterminer le domaine de dérivabilité de {"\\(f\\)"} et la dérivée de {"\\(f\\)"}.</p>
      </div>

      <div className="box example-box" style={{background: 'rgba(255,255,255,0.5)', border: '1px solid rgba(0,0,0,0.05)'}}>
        <details>
          <summary className="font-bold cursor-pointer uppercase tracking-widest text-[10px]">Correction</summary>
          <p className="course-text mt-4">Ici, remarquons que {"\\(f(x) = e^x \\times e^x\\)"} et la fonction exponentielle est dérivable sur {"\\(\\mathbb{R}\\)"} donc par produit de fonctions dérivables, on en déduit que {"\\(f\\)"} est dérivable sur {"\\(\\mathbb{R}\\)"}. Par définition de l'exponentielle : {"\\(\\exp' = \\exp\\)"}. Finalement, d'après le résultat précédent pour {"\\(x \\in \\mathbb{R}\\)"} :</p>
          <div className="formula-box">
            {"\\[ f'(x) = e^x e^x + e^x e^x = 2 e^x e^x = 2 e^{2x} \\]"}
          </div>
        </details>
      </div>
      
      <p className="course-text">
        On remarque dans l'exemple précédent que {"\\(f\\)"} peut aussi s'interpréter comme la composée de deux fonctions. En effet :
        {"\\[ f=\\exp \\circ g \\]"}
        où {"\\(g:x \\mapsto 2x\\)"}. Dès lors, le résultat suivant est bien utile :
      </p>

      <div className="box proposition-box">
        <h4>Propriété 4 (Composition).</h4>
        <p className="course-text">Soient {"\\(a \\in I\\)"}, {"\\(f : I \\to J\\)"} dérivable en {"\\(a\\)"} et {"\\(g : J \\to \\mathbb{R}\\)"} dérivable en {"\\(f(a)\\)"}, alors {"\\(g \\circ f : I \\to \\mathbb{R}\\)"} est dérivable en {"\\(a\\)"} et :</p>
        <div className="formula-box" style={{marginBottom: 0}}>
          {"\\[ (g \\circ f)'(a) = f'(a) \\times g'(f(a)) \\]"}
        </div>
      </div>

      <h2 className="section-title">3. Croissance et monotonie</h2>

      <p className="course-text">
        Une fois la notion de dérivabilité maîtrisée, il est désormais temps d'en faire usage. Dans cette section, on s'intéresse aux résultats établis grâce au caractère dérivable d'une fonction.
      </p>

      <div className="box proposition-box">
        <h4>Théorème 3.</h4>
        <p className="course-text">Soit {"\\(f:I \\to \\mathbb{R}\\)"} dérivable :</p>
        <div className="formula-box" style={{marginBottom: 0}}>
          {"\\(f\\)"} est constante sur I {"\\(\\iff\\)"} {"\\(f'\\)"} est nulle sur I
        </div>
      </div>

      <p className="course-text">On en déduit alors un résultat plus général permettant de caractériser entièrement la monotonie d'une fonction à l'aide de sa dérivée :</p>
      
      <div className="box proposition-box">
        <h4>Théorème 4 (Monotonie à l'aide de la dérivée).</h4>
        <p className="course-text">Soit {"\\(f:I \\to \\mathbb{R}\\)"} une fonction dérivable :</p>
        <div className="formula-box" style={{marginBottom: 0}}>
          {"\\(f\\)"} est croissante (resp. décroissante) sur I {"\\(\\iff\\)"} {"\\(f'\\)"} est positive (resp. négative) ou nulle sur I.
        </div>
      </div>

      <p className="course-text">Un résultat plus fort sur la stricte monotonie permet de caractériser encore mieux les variations d'une fonction dérivable :</p>

      <div className="box proposition-box">
        <h4>Théorème 5 (Stricte monotonie à l'aide de la dérivée).</h4>
        <p className="course-text">Soit {"\\(f:I \\to \\mathbb{R}\\)"} une fonction dérivable :</p>
        <div className="formula-box" style={{marginBottom: 0}}>
          {"\\(f\\)"} est strictement croissante (resp. strictement décroissante) sur I {"\\(\\iff\\)"} {"\\(f'\\)"} est positive (resp. négative) ou nulle sur I et ne s'annule sur aucun intervalle de la forme {"\\([a;b]\\)"} avec {"\\(a < b\\)"}. 
        </div>
      </div>

      <div className="course-text" style={{fontStyle: 'italic', color: '#666'}}>
        <p><strong>Remarque :</strong> En règle générale, on utilise simplement l'implication suivante :</p>
        <p className="text-center">
           {"\\(f'\\)"} est strictement positive sur I {"\\(\\implies\\)"} {"\\(f\\)"} est strictement croissante sur I
        </p>
      </div>
    </>
  );
}
