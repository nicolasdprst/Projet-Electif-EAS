import React from 'react';

export default function ConvexiteCourse() {
  return (
    <>
      <p className="course-text">
        Dans ce chapitre, nous allons étudier une propriété importante des fonctions : la convexité. Cette notion va nous permettre de mieux comprendre la forme des courbes et d'établir des inégalités utiles. Nous travaillerons sur un intervalle {"\\(I\\)"} de {"\\(\\mathbb{R}\\)"}.
      </p>

      <h2 className="section-title">1. Notion de sécante (rappels et compléments)</h2>

      <p className="course-text">
        <strong>Pourquoi commencer par les sécantes ?</strong> La convexité d'une fonction se définit en comparant la courbe avec ses sécantes. Il est donc essentiel de bien maîtriser cette notion avant d'aller plus loin.
      </p>

      <div className="box definition-box">
        <h4>Définition 1. (Sécante et corde)</h4>
        <p className="course-text">Soit {"\\(f\\)"} une fonction définie sur un intervalle {"\\(I\\)"}, et soient {"\\(a\\)"} et {"\\(b\\)"} deux réels de {"\\(I\\)"} avec {"\\(a < b\\)"}.</p>
        <p className="course-text"><strong>1.</strong> La <strong>sécante</strong> à la courbe de {"\\(f\\)"} passant par les points {"\\(A(a; f(a))\\)"} et {"\\(B(b; f(b))\\)"} est la droite {"\\((AB)\\)"}.<br />
        <strong>2.</strong> La <strong>corde</strong> est le segment {"\\([AB]\\)"} reliant ces deux points.</p>
        <p className="course-text">L'équation de cette sécante est :</p>
        <div className="formula-box">
          {"\\[y = \\frac{f(b)-f(a)}{b-a}(x-a) + f(a)\\]"}
        </div>
      </div>

      <div className="image-container">
        <img src="/images/cours/corde.png" alt="Sécante et corde" className="course-image" style={{width: '300px', margin: '0 auto'}} />
        <p className="image-caption">
          <strong>Figure 1.</strong> Sécante (droite complète) et corde (segment) entre deux points
        </p>
      </div>

      <p className="course-text">
        <strong>Lien avec la notion de segment :</strong> Pour bien comprendre la convexité, nous avons besoin de décrire tous les points situés entre {"\\(a\\)"} et {"\\(b\\)"} de manière pratique.
      </p>

      <div className="box definition-box">
        <h4>Définition 2. (Combinaison convexe)</h4>
        <p className="course-text">Pour deux réels {"\\(a\\)"} et {"\\(b\\)"} avec {"\\(a \\leq b\\)"}, tout point {"\\(x\\)"} du segment {"\\([a,b]\\)"} peut s'écrire sous la forme :</p>
        <div className="formula-box">
          {"\\[x = (1-\\lambda)a + \\lambda b \\text{ où } \\lambda \\in [0,1]\\]"}
        </div>
        <p className="course-text" style={{marginBottom: 0}}>On dit que {"\\(x\\)"} est une <strong>combinaison convexe</strong> de {"\\(a\\)"} et {"\\(b\\)"}.</p>
      </div>

      <p className="course-text">
        <strong>Pourquoi cette écriture ?</strong> Quand {"\\(\\lambda = 0\\)"}, on obtient {"\\(x = a\\)"}. Quand {"\\(\\lambda = 1\\)"}, on obtient {"\\(x = b\\)"}. Pour les valeurs intermédiaires de {"\\(\\lambda\\)"}, on obtient tous les points entre {"\\(a\\)"} et {"\\(b\\)"}. Cette écriture va être très utile pour définir la convexité.
      </p>

      <h2 className="section-title">2. Définition de la convexité</h2>

      <p className="course-text">
        <strong>L'idée intuitive :</strong> Une fonction est convexe quand sa courbe "fait le dos rond" vers le haut. Mathématiquement, cela signifie que la courbe se situe toujours en-dessous de ses sécantes.
      </p>

      <div className="box definition-box">
        <h4>Définition 3. (Fonction convexe)</h4>
        <p className="course-text">Une fonction {"\\(f\\)"} définie sur un intervalle {"\\(I\\)"} est dite <strong>convexe</strong> sur {"\\(I\\)"} si :</p>
        <p className="course-text">Pour tous {"\\(a, b \\in I\\)"} et pour tout {"\\(\\lambda \\in [0,1]\\)"} :</p>
        <div className="formula-box">
          {"\\[f((1-\\lambda)a + \\lambda b) \\leq (1-\\lambda)f(a) + \\lambda f(b)\\]"}
        </div>
        <p className="course-text" style={{marginBottom: 0}}><strong>Interprétation graphique :</strong> La courbe de {"\\(f\\)"} est située en-dessous de toutes ses sécantes.</p>
      </div>

      <div className="box definition-box">
        <h4>Définition 4. (Fonction concave)</h4>
        <p className="course-text">Une fonction {"\\(f\\)"} définie sur un intervalle {"\\(I\\)"} est dite <strong>concave</strong> sur {"\\(I\\)"} si :</p>
        <p className="course-text">Pour tous {"\\(a, b \\in I\\)"} et pour tout {"\\(\\lambda \\in [0,1]\\)"} :</p>
        <div className="formula-box">
          {"\\[f((1-\\lambda)a + \\lambda b) \\geq (1-\\lambda)f(a) + \\lambda f(b)\\]"}
        </div>
        <p className="course-text" style={{marginBottom: 0}}><strong>Interprétation graphique :</strong> La courbe de {"\\(f\\)"} est située au-dessus de toutes ses sécantes.</p>
      </div>

      <div className="course-text" style={{fontStyle: 'italic', color: '#666'}}>
        <p><strong>Remarque :</strong> Une fonction {"\\(f\\)"} est concave si et seulement si {"\\(-f\\)"} est convexe. Nous nous concentrerons donc principalement sur les fonctions convexes.</p>
      </div>

      <h2 className="section-title">3. Caractérisation par la dérivée seconde</h2>

      <p className="course-text">
        <strong>Pourquoi utiliser la dérivée seconde ?</strong> En pratique, vérifier directement la définition de la convexité est souvent difficile. La dérivée seconde nous donne un critère beaucoup plus simple à utiliser.
      </p>

      <div className="box proposition-box">
        <h4>Théorème 1. (Critère de convexité)</h4>
        <p className="course-text">Soit {"\\(f\\)"} une fonction deux fois dérivable sur un intervalle {"\\(I\\)"}.</p>
        <p className="course-text"><strong>1.</strong> {"\\(f\\)"} est <strong>convexe</strong> sur {"\\(I\\)"} si et seulement si {"\\(f''(x) \\geq 0\\)"} pour tout {"\\(x \\in I\\)"}<br />
        <strong>2.</strong> {"\\(f\\)"} est <strong>concave</strong> sur {"\\(I\\)"} si et seulement si {"\\(f''(x) \\leq 0\\)"} pour tout {"\\(x \\in I\\)"}</p>
      </div>

      <p className="course-text"><strong>Comment retenir ce critère ?</strong></p>
      <p className="course-text">
        <strong>1.</strong> {"\\(f''(x) > 0\\)"} : la dérivée première {"\\(f'\\)"} est croissante, donc la courbe "tourne vers le haut" {"\\(\\Rightarrow\\)"} convexe<br />
        <strong>2.</strong> {"\\(f''(x) < 0\\)"} : la dérivée première {"\\(f'\\)"} est décroissante, donc la courbe "tourne vers le bas" {"\\(\\Rightarrow\\)"} concave
      </p>

      <div className="box example-box">
        <h4>Exemple 1.</h4>
        <p className="course-text">Étudions la convexité de {"\\(f(x) = x^2\\)"} sur {"\\(\\mathbb{R}\\)"}.</p>
        <p className="course-text">{"\\(f'(x) = 2x\\)"} et {"\\(f''(x) = 2\\)"}</p>
        <p className="course-text" style={{marginBottom: 0}}>Puisque {"\\(f''(x) = 2 > 0\\)"} pour tout {"\\(x \\in \\mathbb{R}\\)"}, la fonction {"\\(f(x) = x^2\\)"} est convexe sur {"\\(\\mathbb{R}\\)"}.</p>
      </div>

      <div className="box example-box">
        <h4>Exemple 2.</h4>
        <p className="course-text">Étudions la convexité de {"\\(g(x) = \\ln(x)\\)"} sur {"\\(]0; +\\infty[\\)"}.</p>
        <div className="formula-box">
          {"\\[g'(x) = \\frac{1}{x} \\text{  et  } g''(x) = -\\frac{1}{x^2}\\]"}
        </div>
        <p className="course-text" style={{marginBottom: 0}}>Puisque {"\\(g''(x) = -\\frac{1}{x^2} < 0\\)"} pour tout {"\\(x > 0\\)"}, la fonction {"\\(\\ln(x)\\)"} est concave sur {"\\(]0; +\\infty[\\)"}.</p>
      </div>

      <h2 className="section-title">4. Caractérisation par les tangentes</h2>

      <p className="course-text">
        <strong>Une autre façon de voir la convexité :</strong> Au lieu de comparer avec les sécantes, on peut comparer la courbe avec ses tangentes.
      </p>

      <div className="box proposition-box">
        <h4>Théorème 2. (Position par rapport aux tangentes)</h4>
        <p className="course-text">Soit {"\\(f\\)"} une fonction dérivable sur un intervalle {"\\(I\\)"}.</p>
        <p className="course-text"><strong>1.</strong> {"\\(f\\)"} est <strong>convexe</strong> sur {"\\(I\\)"} si et seulement si la courbe de {"\\(f\\)"} est au-dessus de toutes ses tangentes<br />
        <strong>2.</strong> {"\\(f\\)"} est <strong>concave</strong> sur {"\\(I\\)"} si et seulement si la courbe de {"\\(f\\)"} est en-dessous de toutes ses tangentes</p>
      </div>

      <p className="course-text"><strong>Formulation mathématique :</strong> Pour une fonction convexe {"\\(f\\)"} et pour tout {"\\(a \\in I\\)"} :</p>
      <div className="formula-box">
        {"\\[f(x) \\geq f(a) + f'(a)(x-a) \\text{ pour tout } x \\in I\\]"}
      </div>
      <p className="course-text">Cette inégalité exprime que la courbe est au-dessus de la tangente en {"\\(a\\)"}.</p>

      <h2 className="section-title">5. Point d'inflexion</h2>

      <p className="course-text">
        <strong>Qu'est-ce qu'un changement de convexité ?</strong> Quand une fonction passe de convexe à concave (ou inversement), il y a un point particulier où ce changement se produit.
      </p>

      <div className="box definition-box">
        <h4>Définition 5. (Point d'inflexion)</h4>
        <p className="course-text" style={{marginBottom: 0}}>Un point d'inflexion est un point de la courbe où celle-ci traverse sa tangente, c'est-à-dire un point où la fonction change de convexité.</p>
      </div>

      <div className="box proposition-box">
        <h4>Théorème 3. (Condition nécessaire pour un point d'inflexion)</h4>
        <p className="course-text">Si {"\\(f\\)"} est deux fois dérivable et si {"\\(x_0\\)"} est l'abscisse d'un point d'inflexion, alors {"\\(f''(x_0) = 0\\)"}.</p>
        <p className="course-text" style={{marginBottom: 0}}><strong>Attention :</strong> La réciproque n'est pas vraie ! Il faut vérifier que {"\\(f''\\)"} change effectivement de signe.</p>
      </div>

      <div className="image-container">
        <img src="/images/cours/point_inflexion.png" alt="Point d'inflexion" className="course-image" style={{width: '400px', margin: '0 auto'}} />
        <p className="image-caption">
          <strong>Figure 2.</strong> Point d'inflexion : la courbe traverse sa tangente
        </p>
      </div>

      <div className="box example-box">
        <h4>Exemple 3.</h4>
        <p className="course-text">Étudions les points d'inflexion de {"\\(h(x) = x^3\\)"}.</p>
        <p className="course-text">{"\\(h'(x) = 3x^2\\)"} et {"\\(h''(x) = 6x\\)"}</p>
        <p className="course-text">{"\\(h''(x) = 0 \\Leftrightarrow x = 0\\)"}</p>
        <p className="course-text">Étude du signe de {"\\(h''(x) = 6x\\)"} :</p>
        <p className="course-text"><strong>1.</strong> Si {"\\(x < 0\\)"} : {"\\(h''(x) < 0\\)"} donc {"\\(h\\)"} est concave<br />
        <strong>2.</strong> Si {"\\(x > 0\\)"} : {"\\(h''(x) > 0\\)"} donc {"\\(h\\)"} est convexe</p>
        <p className="course-text" style={{marginBottom: 0}}>La fonction change de convexité en {"\\(x = 0\\)"}, donc le point {"\\((0, 0)\\)"} est un point d'inflexion.</p>
      </div>

      <h2 className="section-title">6. Fonctions de référence</h2>

      <p className="course-text">
        <strong>Pourquoi connaître ces résultats ?</strong> Ces fonctions apparaissent régulièrement dans les exercices. Connaître leur convexité permet de résoudre plus rapidement les problèmes.
      </p>

      <div className="box proposition-box">
        <h4>Théorème 4. (Convexité des fonctions usuelles)</h4>
        <p className="course-text" style={{marginBottom: 0}}>
          <strong>1.</strong> {"\\(f(x) = x^2\\)"} : convexe sur {"\\(\\mathbb{R}\\)"}<br />
          <strong>2.</strong> {"\\(f(x) = x^3\\)"} : concave sur {"\\(]-\\infty; 0]\\)"} et convexe sur {"\\([0; +\\infty[\\)"}<br />
          <strong>3.</strong> {"\\(f(x) = e^x\\)"} : convexe sur {"\\(\\mathbb{R}\\)"}<br />
          <strong>4.</strong> {"\\(f(x) = \\ln(x)\\)"} : concave sur {"\\(]0; +\\infty[\\)"}<br />
          <strong>5.</strong> {"\\(f(x) = \\sqrt{x}\\)"} : concave sur {"\\([0; +\\infty[\\)"}
        </p>
      </div>

      <h2 className="section-title">7. Applications de la convexité</h2>

      <p className="course-text">
        <strong>À quoi sert la convexité ?</strong> La convexité permet de démontrer des inégalités importantes et de résoudre des problèmes d'optimisation.
      </p>

      <div className="box example-box">
        <h4>Exemple d'application : Inégalité arithmético-géométrique (cas {"\\(n=2\\)"})</h4>
        <p className="course-text">En utilisant la concavité de {"\\(\\ln\\)"} sur {"\\(]0; +\\infty[\\)"}, on peut démontrer que pour tous {"\\(a, b > 0\\)"} :</p>
        <div className="formula-box">
          {"\\[\\frac{a+b}{2} \\geq \\sqrt{ab}\\]"}
        </div>
        <p className="course-text" style={{marginBottom: 0}}>Cette inégalité exprime que la moyenne arithmétique est toujours supérieure à la moyenne géométrique.</p>
      </div>
    </>
  );
}
