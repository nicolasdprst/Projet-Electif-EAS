import React from 'react';

export default function ContinuiteCourse() {
  return (
    <>
      <p className="course-text">
        Dans tout ce chapitre, on définit {"\\(I\\)"} comme un intervalle ouvert de {"\\(\\mathbb{R}\\)"}.
      </p>

      <h2 className="section-title">1. Définitions</h2>
      <p className="course-text">
        Soient {"\\(a \\in I\\)"} et {"\\(f : I \\mapsto \\mathbb{R}\\)"} :
      </p>
      
      <div className="box definition-box">
        <h4>Définition 1. (Continuité en un point et généralisation)</h4>
        <p className="course-text">Soit {"\\(f\\)"} une fonction définie sur {"\\(I\\)"} et {"\\(a\\)"} un nombre réel contenu dans cet intervalle. On dit que {"\\(f\\)"} est continue en {"\\(a\\)"} si :</p>
        <div className="formula-box">
            {"\\[ \\displaystyle\\lim_{x \\to a} f(x) = f(a) \\]"}
        </div>
        <p className="course-text" style={{marginBottom: 0}}>Alors, la fonction {"\\(f\\)"} est définie sur tout l'intervalle {"\\(I\\)"} si et seulement si elle est continue en chacun des points de cet intervalle.</p>
      </div>

      <div className="box proposition-box">
        <h4>Interprétation graphique.</h4>
        <p className="course-text" style={{marginBottom: 0}}>Une fonction {"\\(f\\)"} est continue sur un intervalle si l'on peut tracer sa représentation graphique sans avoir besoin de "lever" son stylo.</p>
      </div>

      <div className="image-container" style={{display: 'flex', gap: '10px'}}>
        <div style={{flex: 1}}>
          <img src="/images/cours/continuite.png" alt="Fonction continue" className="course-image" />
          <p className="image-caption"><strong>Figure 1.</strong> La fonction {"\\(f\\)"} est continue</p>
        </div>
        <div style={{flex: 1}}>
          <img src="/images/cours/discontinuite.png" alt="Fonction discontinue" className="course-image" />
          <p className="image-caption"><strong>Figure 2.</strong> La fonction {"\\(f\\)"} n'est <strong>PAS</strong> continue</p>
        </div>
      </div>

      <p className="course-text">
        En règle générale, à chaque fois qu'une fonction possède une discontinuité, on observe un saut au point de discontinuité, comme c'est le cas de la fonction de droite (pour les plus curieux, il s'agit de la fonction partie entière).
      </p>
      <p className="course-text">
        Néanmoins, cela n'est pas toujours vrai, en considérant par exemple la fonction {"\\(g\\)"} suivante :
      </p>
      
      <div className="formula-box">
          {"\\[ g : x\\mapsto {\\begin{cases}\\sin {\\frac {5}{x-1}}&{\\mbox{ si }}x<1\\\\0&{\\mbox{ si }}x=1\\\\{sin(\\frac {1}{x-1})}&{\\mbox{ si }}x>1\\end{cases}} \\]"}
      </div>

      <p className="course-text">On obtient la représentation suivante :</p>
      
      <div className="image-container">
        <img src="/images/cours/sinus.png" alt="Représentation de la fonction g" className="course-image" style={{maxWidth: '500px', margin: '0 auto'}} />
        <p className="image-caption">
          <strong>Figure 3.</strong> Représentation graphique de la fonction {"\\(g\\)"}
        </p>
      </div>
      
      <p className="course-text">Cela reste néanmoins des cas moins fréquents.</p>

      <h2 className="section-title">2. Fonctions usuelles</h2>
      <p className="course-text">
        De manière analogue à l'opérateur dérivée, on liste ici le domaine de continuité des fonctions usuelles, celles que l'on traite de manière générale au lycée.
      </p>

      <div className="box proposition-box">
        <h4>Propriété 1 (Tableau récapitulatif).</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Fonction usuelle</th>
                <th className="text-left py-2">Domaine de continuité</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">{"\\(f(x) = x^n, \\, n \\in \\mathbb{N}\\)"}</td>
                <td className="py-2">{"\\(\\mathbb{R}\\)"}</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">{"\\(f(x) = \\frac{1}{x^n}, \\, n \\in \\mathbb{N}^*\\)"}</td>
                <td className="py-2">{"\\(]-\\infty, 0[ \\cup ]0, +\\infty[\\)"}</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">{"\\(f(x) = \\sqrt{x}\\)"}</td>
                <td className="py-2">{"\\([0, +\\infty[\\)"}</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">{"\\(f(x) = e^x\\)"}</td>
                <td className="py-2">{"\\(\\mathbb{R}\\)"}</td>
              </tr>
              <tr>
                <td className="py-2">{"\\(f(x) = \\sin x \\, \\text{;} \\, f(x) = \\cos x\\)"}</td>
                <td className="py-2">{"\\(\\mathbb{R}\\)"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2 className="section-title">3. Opérations sur les fonctions continues</h2>
      
      <div className="box proposition-box">
        <h4>Propriété 2.</h4>
        <p className="course-text" style={{marginBottom: 0}}>Toutes fonctions obtenues par somme, produit, quotient ou composition de fonctions de référence sont continues sur leur ensemble de définition.</p>
      </div>

      <p className="course-text">Cette propriété permet de déterminer rapidement en général si une fonction est continue ou non :</p>

      <div className="box example-box">
        <h4>Exemple 1.</h4>
        <p className="course-text" style={{marginBottom: 0}}>Prenons comme exemple la fonction {"\\(f : x \\mapsto e^{x+2}\\)"}. On sait (d'après le tableau précédent) que les fonctions {"\\(g : y \\mapsto e^y\\)"} et {"\\(h : x \\mapsto x+2\\)"} sont continues sur {"\\(\\mathbb{R}\\)"}. Alors, par composition, on en déduit que {"\\(f = g \\circ h\\)"} est continue sur {"\\(\\mathbb{R}\\)"}.</p>
      </div>

      <h2 className="section-title">4. Théorèmes importants</h2>

      <div className="box proposition-box">
        <h4>Théorème 1. (Théorème des valeurs intermédiaires)</h4>
        <p className="course-text" style={{marginBottom: 0}}>Pour toute fonction continue {"\\( f : [a, b] \\to \\mathbb{R} \\)"} et tout réel {"\\( u \\)"} compris entre {"\\( f(a) \\)"} et {"\\( f(b) \\)"}, il existe au moins un réel {"\\( c \\)"} compris entre {"\\( a \\)"} et {"\\( b \\)"} tel que {"\\( f(c) = u \\)"}.</p>
      </div>

      <p className="course-text">
        Ce théorème permet d'affirmer que pour une fonction {"\\(f\\)"} continue sur un intervalle {"\\([a,b]\\)"}, {"\\(f(x)\\)"} prend nécessairement toutes les valeurs entre {"\\(f(a)\\)"} et {"\\(f(b)\\)"}. Graphiquement :
      </p>

      <div className="image-container">
        <img src="/images/cours/graph_th_val_inter.png" alt="Graphique Théorème des Valeurs Intermédiaires" className="course-image" style={{maxWidth: '450px', margin: '0 auto'}} />
        <p className="image-caption">
          <strong>Figure 4.</strong> Interprétation graphique
        </p>
      </div>

      <p className="course-text">
        On observe sur la figure 4 que la solution {"\\(y=u\\)"} n'est pas unique. Pour s'assurer de l'unicité de la solution, il faut ajouter des hypothèses:
      </p>

      <div className="box proposition-box">
        <h4>Théorème 2. (Corollaire strictement monotone du TVI)</h4>
        <p className="course-text" style={{marginBottom: 0}}>Pour toute fonction continue <strong>ET</strong> strictement monotone {"\\( f : [a, b] \\to \\mathbb{R} \\)"} et tout réel {"\\( u \\)"} compris entre {"\\( f(a) \\)"} et {"\\( f(b) \\)"}, il existe un <strong>UNIQUE</strong> réel {"\\( c \\)"} compris entre {"\\( a \\)"} et {"\\( b \\)"} tel que {"\\( f(c) = u \\)"}.</p>
      </div>

      <div className="box example-box">
        <h4>Exemple 2.</h4>
        <p className="course-text">Dans cet exemple, démontrons que l'équation {"\\(\\cos(x) = x\\)"} admet une solution unique dans l'intervalle {"\\(]0 ; \\pi[\\)"}.</p>
        <p className="course-text">Ici, nous allons utiliser le théorème précédent, en posant {"\\(f(x) = \\cos(x) - x\\)"}. On montre que l'équation {"\\(f(x) = 0\\)"} possède une unique solution. Étudions les variations de la fonction {"\\(f\\)"}.</p>
        <p className="course-text">Comme {"\\(f'(x) = -\\sin(x) - 1 < 0\\)"} sur {"\\([0 ; \\pi]\\)"}, {"\\(f\\)"} est strictement décroissante sur {"\\([0 ; \\pi]\\)"}. De plus, {"\\(f(0) = \\cos(0) - 0 = 1 > 0\\)"} et {"\\(f(\\pi) = \\cos(\\pi) - \\pi = -1 - \\pi < 0\\)"}, donc {"\\(f(\\pi) < 0 < f(0)\\)"}.</p>
        <p className="course-text" style={{marginBottom: 0}}>De ce fait, l'équation {"\\(f(x) = 0\\)"} admet une unique solution dans l'intervalle {"\\(]0 ; \\pi[\\)"}. D'où {"\\(\\cos(x) = x\\)"} aussi.</p>
      </div>

      <p className="course-text">
        L'interprétation graphique peut permettre de mieux comprendre l'exemple. Voici le graphe de la fonction {"\\(f\\)"} définie dans l'exemple :
      </p>

      <div className="image-container">
        <img src="/images/cours/test.png" alt="Graphique de f(x) = cos(x) - x" className="course-image" style={{maxWidth: '500px', margin: '0 auto'}} />
        <p className="image-caption">
          <strong>Figure 5.</strong> Représentation graphique de {"\\(f\\)"}
        </p>
      </div>
      
      <p className="course-text">
        Graphiquement, on observe bien que {"\\(f\\)"} ne coupe l'axe des abscisses qu'une unique fois.
      </p>
      <p className="course-text">
        Enfin, un dernier théorème intéressant à étudier concerne l'image d'une suite convergente par une fonction continue :
      </p>

      <div className="box proposition-box">
        <h4>Théorème 3.</h4>
        <p className="course-text" style={{marginBottom: 0}}>Soit {"\\((u_n)\\)"} une suite à valeurs dans un intervalle {"\\([a,b]\\)"} et {"\\(f\\)"} une fonction définie et continue sur {"\\([a,b]\\)"}. Si {"\\((u_n)\\)"} converge vers {"\\(l \\in [a,b]\\)"}, alors la suite de terme général {"\\(f(u_n)\\)"} converge vers {"\\(f(l)\\)"}.</p>
      </div>

      <div className="box example-box">
        <h4>Exemple 3.</h4>
        
        <div className="box proposition-box" style={{background: 'rgba(255,255,255,0.5)', border: '1px solid rgba(0,0,0,0.05)'}}>
            <h4>Rappel : théorème du point fixe</h4>
            <p className="course-text">Considérons une suite {"\\((u_n)\\)"} une suite définie par récurrence de la manière suivante :</p>
            <div className="formula-box">
                {"\\[ \\forall n \\in \\mathbb{N}, \\quad u_{n+1} = f(u_n) \\]"}
            </div>
            <p className="course-text" style={{marginBottom: 0}}>où {"\\(f\\)"} est une fonction continue sur {"\\(\\mathbb{R}\\)"}. Si {"\\((u_n)\\)"} converge vers {"\\(l\\)"}, alors {"\\(l\\)"} est un point fixe de {"\\(f\\)"} et vérifie {"\\(f(l) = l\\)"}.</p>
        </div>

        <h4 className="text-sm font-bold mt-4 mb-2">Application</h4>
        <p className="course-text">Soit {"\\(u_0 = 1\\)"} et {"\\(\\forall n \\in \\mathbb{N}, \\quad u_{n+1} = \\frac{1}{2}\\left(u_n + \\frac{a}{u_n}\\right)\\)"} avec {"\\(a > 0\\)"} et {"\\(a \\neq 1\\)"}. Il s'agit de montrer que {"\\((u_n)\\)"} converge vers {"\\(\\sqrt{a}\\)"}.</p>
        <p className="course-text">Raisonnons par récurrence sur {"\\(n \\in \\mathbb{N}^*\\)"} en montrant que {"\\(u_n > \\sqrt{a}\\)"} :</p>
        
        <p className="course-text font-bold">Initialisation :</p>
        <p className="course-text">Pour {"\\(n = 1\\)"}, il s'agit de montrer que {"\\(u_1 > \\sqrt{a}\\)"}</p>
        <div className="formula-box">
            {"\\[ u_1 = \\frac{1}{2}(1 + \\frac{a}{1}) \\]"}
        </div>
        <p className="course-text">Mais</p>
        <div className="formula-box">
            {"\\[ (1 - \\sqrt{a})^2 = 1 - 2\\sqrt{a} + a > 0 \\]"}
        </div>
        <p className="course-text">donc, en manipulant l'inégalité, on obtient :</p>
        <div className="formula-box">
            {"\\[ u_1 = \\frac{1 + a}{2} > \\sqrt{a} \\]"}
        </div>
        
        <p className="course-text font-bold">Hérédité :</p>
        <p className="course-text">Soit {"\\(n \\in \\mathbb{N}^*\\)"}. On suppose {"\\(u_n > \\sqrt{a}\\)"} (hypothèse de récurrence), alors :</p>
        <div className="formula-box">
            {"\\[ u_{n+1} - \\sqrt{a} = \\frac{(u_n - \\sqrt{a})^2}{2u_n} > 0 \\]"}
        </div>
        
        <p className="course-text">Enfin, calculons {"\\(u_{n+1} - u_n\\)"} :</p>
        <div className="formula-box">
            {"\\[ u_{n+1} - u_n = \\frac{a - u_n^2}{2u_n} \\]"}
            {"\\[ u_{n+1} - u_n = \\frac{(\\sqrt{a} - u_n)(\\sqrt{a} + u_n)}{2u_n} < 0 \\]"}
        </div>
        <p className="course-text">donc {"\\((u_n)\\)"} est décroissante et minorée par {"\\(\\sqrt{a}\\)"}.</p>
        <p className="course-text">Elle converge donc vers un réel positif qui vérifie le théorème du point fixe : {"\\(l = f(l)\\)"}. Autrement dit :</p>
        <div className="formula-box">
            {"\\[ l = f(l) \\iff l = \\frac{1}{2}(l + \\frac{a}{l}) \\]"}
        </div>
        <p className="course-text">Les solutions de cette équation sont</p>
        <div className="formula-box">
            {"\\[ l = \\pm\\sqrt{a}. \\]"}
        </div>
        <p className="course-text" style={{marginBottom: 0}}>On ne retient que la valeur positive. D'où le résultat.</p>
      </div>

      <h2 className="section-title">5. Lien entre dérivation et continuité</h2>
      
      <div className="box proposition-box">
        <h4>Propriété 3.</h4>
        <p className="course-text" style={{marginBottom: 0}}>Si {"\\(f\\)"} est une fonction dérivable sur I, alors {"\\(f\\)"} est continue sur cet intervalle.</p>
      </div>
    </>
  );
}
