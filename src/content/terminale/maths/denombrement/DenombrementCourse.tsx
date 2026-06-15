import React from 'react';

export default function DenombrementCourse() {
  return (
    <>
      <h2 className="section-title">1. Introduction et notions de base</h2>

      <h3 className="subsection-title">1.1. Ensembles finis et cardinal</h3>

      <div className="box definition-box">
        <h4>Définition 1.</h4>
        <p className="course-text" style={{marginBottom: 0}}>Un ensemble {"\\(E\\)"} est dit <em>fini</em> si le nombre de ses éléments est un entier naturel; ce nombre s’appelle le <em>cardinal</em> de {"\\(E\\)"}, noté {"\\(\\mathrm{Card}(E)\\)"} ou {"\\(|E|\\)"}.</p>
      </div>

      <div className="box proposition-box">
        <h4>Propriété 1.</h4>
        <p className="course-text">Si {"\\(E\\)"} et {"\\(F\\)"} sont deux ensembles finis et disjoints (c.-à-d. {"\\(E \\cap F = \\varnothing\\)"}), alors</p>
        <div className="formula-box">
            {"\\[ \\mathrm{Card}(E \\cup F) = \\mathrm{Card}(E) + \\mathrm{Card}(F). \\]"}
        </div>
        <p className="course-text">Plus généralement, pour des ensembles deux à deux disjoints {"\\(E_1, \\ldots, E_p\\)"} :</p>
        <div className="formula-box">
            {"\\[ \\mathrm{Card}\\left(\\bigcup_{i=1}^p E_i\\right) = \\sum_{i=1}^p \\mathrm{Card}(E_i). \\]"}
        </div>
      </div>

      <h3 className="subsection-title">1.2. Couples, triplets, k-uplets et produit cartésien</h3>

      <div className="box definition-box">
        <h4>Définition 2. (Produit cartésien)</h4>
        <p className="course-text">Soient {"\\(E\\)"} et {"\\(F\\)"} deux ensembles finis non vides. Leur produit cartésien {"\\(E \\times F\\)"} est l’ensemble des couples {"\\((x,y)\\)"} avec {"\\(x\\in E\\)"} et {"\\(y\\in F\\)"}.<br />
        Son cardinal vérifie :</p>
        <div className="formula-box">
            {"\\[ \\mathrm{Card}(E \\times F) = \\mathrm{Card} (E)\\, \\times \\mathrm{Card}(F). \\]"}
        </div>
        <p className="course-text" style={{marginBottom: 0}}>On définit de même le produit cartésien de trois ensembles {"\\(E \\times F \\times G\\)"}, puis de {"\\(k\\)"} ensembles.</p>
      </div>

      <h2 className="section-title">2. Principe multiplicatif et additif</h2>

      <div className="box proposition-box">
        <h4>Théorème 1. (Principe multiplicatif)</h4>
        <p className="course-text" style={{marginBottom: 0}}>Si une expérience ou un procédé se décompose en deux étapes successives, la première pouvant se réaliser de {"\\(n\\)"} façons, la deuxième de {"\\(m\\)"} façons, alors le nombre total de façons de réaliser l’ensemble des deux étapes est {"\\(n \\times m\\)"}.</p>
      </div>

      <div className="box example-box">
        <p className="course-text" style={{marginBottom: 0}}><strong>Exemple :</strong> On compose un code à deux caractères : le premier est une lettre parmi 26, le second un chiffre parmi 10.<br />
        Nombre total de codes possibles : {"\\(26 \\times 10 = 260\\)"}.</p>
      </div>

      <div className="box definition-box">
        <h4>Principe additif.</h4>
        <p className="course-text" style={{marginBottom: 0}}>Si on a plusieurs procédures alternatives disjointes (i.e. qui ne peuvent pas se produire ensemble), le nombre total est la somme des nombres de cas de chaque procédure.</p>
      </div>

      <div className="box example-box">
        <p className="course-text"><strong>Exemple :</strong> On dispose de deux procédures disjointes pour composer un code :</p>
        <ul className="list-disc ml-6 text-sm text-gray-700 space-y-2">
          <li>soit on choisit un mot de longueur 2 parmi l'alphabet {"\\(\\{A,B\\}\\)"} (donc {"\\(2^2=4\\)"} possibilités),</li>
          <li>soit on choisit un chiffre parmi {"\\(\\{0,1,2,3\\}\\)"} (donc {"\\(4\\)"} possibilités).</li>
        </ul>
        <p className="course-text mt-4" style={{marginBottom: 0}}>Ces deux procédures sont disjointes, donc le nombre total de codes possibles est {"\\(4+4=8\\)"}.</p>
      </div>

      <h2 className="section-title">3. k-listes, arrangements, permutations</h2>

      <h3 className="subsection-title">3.1. k-uplets</h3>

      <div className="box definition-box">
        <h4>Définition 3.</h4>
        <p className="course-text" style={{marginBottom: 0}}>Soit {"\\(E\\)"} un ensemble non vide, {"\\(n = \\mathrm{Card}(E)\\)"}. Un <em>{"\\(k\\)"}-uplet</em> (ou {"\\(k\\)"}-liste) de {"\\(E\\)"} est une suite ordonnée de {"\\(k\\)"} éléments de {"\\(E\\)"}, où la répétition est possible.</p>
      </div>

      <div className="box proposition-box">
        <h4>Propriété 2.</h4>
        <p className="course-text" style={{marginBottom: 0}}>Le nombre de {"\\(k\\)"}-uplets d’un ensemble de cardinal {"\\(n\\)"} est {"\\(n^k\\)"}.</p>
      </div>

      <div className="box example-box">
        <p className="course-text" style={{marginBottom: 0}}><strong>Exemple :</strong> On lance un dé équilibré à 6 faces, trois fois. Le nombre de suites (d’ordre des résultats) possibles est {"\\(6^3 = 216\\)"}.</p>
      </div>

      <h3 className="subsection-title">3.2. Arrangements</h3>

      <div className="box definition-box">
        <h4>Définition 4.</h4>
        <p className="course-text" style={{marginBottom: 0}}>Un <em>arrangement</em> de {"\\(k\\)"} éléments parmi {"\\(n\\)"} (sans répétition) est une suite ordonnée de {"\\(k\\)"} éléments distincts choisis parmi {"\\(n\\)"} éléments.</p>
      </div>

      <div className="box proposition-box">
        <h4>Formule.</h4>
        <p className="course-text">Le nombre d’arrangements de {"\\(k\\)"} éléments parmi {"\\(n\\)"} est</p>
        <div className="formula-box">
            {"\\[ A_n^k = n \\times (n-1) \\times \\cdots \\times (n-k+1) = \\frac{n!}{(n-k)!}, \\]"}
        </div>
        <p className="course-text" style={{marginBottom: 0}}>pour {"\\(0 \\le k \\le n\\)"}.</p>
      </div>

      <div className="box example-box">
        <p className="course-text"><strong>Exemple :</strong> Nombre de manières de faire un podium (1ᵉʳ, 2ᵉ, 3ᵉ) parmi 10 coureurs : {"\\(A_{10}^3 = 10 \\times 9 \\times 8 = 720\\)"}.</p>
        <p className="course-text font-bold mt-4">Exemple illustratif :</p>
        <ul className="list-disc ml-6 text-sm text-gray-700 space-y-2">
            <li>Dans un <strong>arrangement</strong>, on choisit des éléments et on les place dans un ordre précis (ex. podium).</li>
            <li>Dans une <strong>combinaison</strong>, on choisit seulement l'ensemble des éléments, sans tenir compte de l'ordre (ex. une équipe).</li>
        </ul>
      </div>

      <h3 className="subsection-title">3.3. Permutations</h3>

      <div className="box definition-box">
        <h4>Définition 5.</h4>
        <p className="course-text" style={{marginBottom: 0}}>Une permutation d’un ensemble de {"\\(n\\)"} éléments est un arrangement de tous les {"\\(n\\)"} éléments ; autrement dit une suite ordonnée de longueur {"\\(n\\)"} sans répétition et contenant tous les éléments.</p>
      </div>

      <div className="box proposition-box">
        <h4>Formule.</h4>
        <p className="course-text" style={{marginBottom: 0}}>Le nombre de permutations d’un ensemble à {"\\(n\\)"} éléments est {"\\(n!\\)"}.</p>
      </div>

      <h2 className="section-title">4. Combinaisons et parties</h2>

      <h3 className="subsection-title">4.1. Parties d’un ensemble</h3>

      <div className="box definition-box">
        <h4>Définition 6.</h4>
        <p className="course-text" style={{marginBottom: 0}}>Si {"\\(E\\)"} est un ensemble fini de cardinal {"\\(n\\)"}, une <em>partie</em> (ou sous-ensemble) de {"\\(E\\)"} est tout ensemble constitué d’éléments de {"\\(E\\)"}.</p>
      </div>

      <div className="box proposition-box">
        <h4>Propriété 3.</h4>
        <p className="course-text" style={{marginBottom: 0}}>Le nombre de parties de {"\\(E\\)"} est {"\\(2^n\\)"}.</p>
      </div>

      <div className="box example-box">
        <p className="course-text"><strong>Lien avec d'autres représentations :</strong> Chaque partie de {"\\(E=\\{1,\\dots,n\\}\\)"} correspond à :</p>
        <ul className="list-disc ml-6 text-sm text-gray-700 space-y-2">
          <li>un mot binaire de longueur {"\\(n\\)"} (1 = élément choisi, 0 = élément non choisi) ;</li>
          <li>un chemin dans un arbre de Bernoulli de profondeur {"\\(n\\)"} (choix / non-choix) ;</li>
          <li>un {"\\(n\\)"}-uplet d'éléments de {"\\(\\{0,1\\}\\)"}.</li>
        </ul>
        <p className="course-text mt-4" style={{marginBottom: 0}}>Ainsi on obtient {"\\(2^n\\)"} parties.</p>
      </div>

      <h3 className="subsection-title">4.2. Combinaisons sans ordre</h3>

      <div className="box definition-box">
        <h4>Définition 7.</h4>
        <p className="course-text" style={{marginBottom: 0}}>Une combinaison de {"\\(k\\)"} éléments parmi {"\\(n\\)"} est le choix d’un sous-ensemble de {"\\(k\\)"} éléments parmi {"\\(n\\)"}, sans tenir compte de l’ordre.</p>
      </div>

      <div className="box proposition-box">
        <h4>Formule.</h4>
        <div className="formula-box">
            {"\\[ \\binom{n}{k} = C_n^k = \\frac{n!}{k!(n-k)!}, \\quad 0 \\le k \\le n. \\]"}
        </div>
      </div>

      <div className="box example-box">
        <p className="course-text"><strong>Cas particuliers :</strong></p>
        <div className="formula-box" style={{background: 'transparent', color: 'inherit', boxShadow: 'none', padding: 0}}>
            {"\\[ \\binom{n}{0} = 1, \\quad \\binom{n}{1} = n, \\quad \\binom{n}{2} = \\frac{n(n-1)}{2}. \\]"}
        </div>
        <p className="course-text font-bold mt-4">Symétrie :</p>
        <p className="course-text" style={{marginBottom: 0}}>On a l’égalité fondamentale :</p>
        <div className="formula-box" style={{background: 'transparent', color: 'inherit', boxShadow: 'none', padding: 0}}>
            {"\\[ \\binom{n}{k} = \\binom{n}{n-k}. \\]"}
        </div>
      </div>

      <h2 className="section-title">5. Formules d'inclusion-exclusion</h2>

      <div className="box proposition-box">
        <h4>Théorème 2. (Deux ensembles)</h4>
        <p className="course-text">Soient {"\\(A\\)"} et {"\\(B\\)"} deux ensembles finis. Alors</p>
        <div className="formula-box">
            {"\\[ |A \\cup B| = |A| + |B| - |A\\cap B|. \\]"}
        </div>
      </div>

      <h2 className="section-title">6. Binôme de Newton et relations fondamentales</h2>

      <div className="box proposition-box">
        <h4>Théorème 3. (Binôme de Newton)</h4>
        <p className="course-text">Pour tout réel {"\\(a, b\\)"} et tout entier {"\\(n\\)"} :</p>
        <div className="formula-box">
            {"\\[ (a + b)^n = \\sum_{k=0}^n \\binom{n}{k} a^{n-k} b^k. \\]"}
        </div>
      </div>

      <div className="box example-box">
        <details>
          <summary className="font-bold cursor-pointer uppercase tracking-widest text-[10px]">Preuve</summary>
          <p className="course-text mt-4">On veut montrer par récurrence que pour tout entier {"\\(n\\ge 0\\)"} et tous réels {"\\(a,b\\)"} :</p>
          <div className="formula-box" style={{background: 'transparent', color: 'inherit', boxShadow: 'none'}}>
            {"\\[ (a+b)^n=\\sum_{k=0}^n \\binom{n}{k} a^{\\,n-k} b^{\\,k}. \\]"}
          </div>
          
          <p className="course-text font-bold">Initialisation :</p>
          <p className="course-text">Pour {"\\(n=0\\)"} : {"\\((a+b)^0=1\\)"} et {"\\(\\displaystyle\\sum_{k=0}^{0}\\binom{0}{k}a^{0-k}b^{k}=\\binom{0}{0}a^0b^0=1\\)"}. La formule est vraie pour {"\\(n=0\\)"}.</p>
          
          <p className="course-text font-bold">Hérédité :</p>
          <p className="course-text">Supposons la formule vraie pour un entier {"\\(n\\ge0\\)"}. Nous montrons qu'elle est alors vraie pour {"\\(n+1\\)"}.</p>
          <p className="course-text">On multiplie les deux membres par {"\\((a+b)\\)"} :</p>
          <div className="formula-box" style={{background: 'transparent', color: 'inherit', boxShadow: 'none'}}>
            {"\\[ (a+b)^{n+1}=(a+b)\\sum_{k=0}^n \\binom{n}{k} a^{\\,n-k} b^{\\,k} \\]"}
          </div>
          <p className="course-text">En développant et en effectuant des changements d'indices (voir cours détaillé), on utilise la relation de Pascal :</p>
          <div className="formula-box" style={{background: 'transparent', color: 'inherit', boxShadow: 'none'}}>
            {"\\[ \\binom{n}{j} + \\binom{n}{j-1} = \\binom{n+1}{j} \\]"}
          </div>
          <p className="course-text">Pour finalement obtenir :</p>
          <div className="formula-box" style={{background: 'transparent', color: 'inherit', boxShadow: 'none'}}>
            {"\\[ (a+b)^{n+1} = \\sum_{j=0}^{n+1} \\binom{n+1}{j}\\, a^{\\,n+1-j} b^{\\,j}. \\]"}
          </div>
          <p className="course-text" style={{marginBottom: 0}}>Ceci montre que si la formule est vraie pour {"\\(n\\)"} elle est vraie pour {"\\(n+1\\)"}. Par le principe de récurrence, la formule vaut pour tout entier {"\\(n\\ge0\\)"}.</p>
        </details>
      </div>

      <h3 className="subsection-title">6.1. Somme des coefficients binomiaux</h3>

      <div className="box proposition-box">
        <h4>Propriété 4.</h4>
        <p className="course-text">On a l'égalité :</p>
        <div className="formula-box">
            {"\\[ \\sum_{k=0}^n \\binom{n}{k} = 2^n. \\]"}
        </div>
      </div>

      <div className="box example-box">
        <p className="course-text"><strong>Preuve combinatoire :</strong> Considérons un ensemble {"\\(E\\)"} à {"\\(n\\)"} éléments. Chaque partie de {"\\(E\\)"} a une taille {"\\(k\\)"} (avec {"\\(0 \\le k \\le n\\)"}). Le nombre de parties de taille {"\\(k\\)"} est {"\\(\\binom{n}{k}\\)"}. En sommant sur toutes les tailles, on obtient le nombre total de parties : {"\\(\\sum_{k=0}^n \\binom{n}{k}\\)"}.<br />
        Mais on sait aussi que chaque élément peut être choisi ou non : il y a {"\\(2\\)"} choix par élément, indépendants, donc {"\\(2^n\\)"} parties au total.</p>
        <p className="course-text" style={{marginBottom: 0}}><strong>Preuve via le binôme de Newton :</strong> Prendre {"\\(a=1\\)"} et {"\\(b=1\\)"} dans l'identité du binôme de Newton donne directement {"\\((1+1)^n = \\sum_{k=0}^n \\binom{n}{k} = 2^n\\)"}.</p>
      </div>

      <h3 className="subsection-title">6.2. Relation de Pascal</h3>

      <div className="box proposition-box">
        <h4>Théorème 4. (Relation de Pascal)</h4>
        <p className="course-text">Pour tout {"\\(n\\ge 1\\)"} et {"\\(1\\le k \\le n\\)"} :</p>
        <div className="formula-box">
            {"\\[ \\binom{n}{k} = \\binom{n-1}{k-1} + \\binom{n-1}{k}. \\]"}
        </div>
      </div>

      <div className="box example-box">
        <p className="course-text" style={{marginBottom: 0}}><strong>Preuve combinatoire :</strong> Pour choisir {"\\(k\\)"} éléments parmi {"\\(n\\)"}, regardons un élément fixé {"\\(x\\)"}. On distingue deux cas : soit {"\\(x\\)"} est choisi (alors il reste à choisir {"\\(k-1\\)"} parmi {"\\(n-1\\)"} éléments), soit {"\\(x\\)"} n'est pas choisi (alors il faut choisir {"\\(k\\)"} parmi {"\\(n-1\\)"}). D'où la relation.</p>
      </div>

      <h2 className="section-title">7. Approfondissement : combinaisons avec répétition</h2>

      <div className="box proposition-box">
        <h4>Formule.</h4>
        <p className="course-text">Le nombre de combinaisons avec répétitions (choisir {"\\(k\\)"} éléments parmi {"\\(n\\)"} avec répétition, sans ordre) est :</p>
        <div className="formula-box">
            {"\\[ \\binom{n+k-1}{k}. \\]"}
        </div>
      </div>

      <div className="course-text" style={{fontStyle: 'italic', color: '#666'}}>
        <p><strong>Remarque :</strong> Cette formule se démontre en représentant la sélection comme une distribution de {"\\(k\\)"} objets identiques dans {"\\(n\\)"} cases distinctes ("barres et étoiles").</p>
      </div>

      <h2 className="section-title">8. Exemples algorithmiques</h2>

      <div className="box example-box">
        <ul className="list-disc ml-6 text-sm text-gray-700 space-y-2">
          <li>Génération de la liste des coefficients {"\\(\\binom{n}{k}\\)"} par la relation de Pascal (itératif) ;</li>
          <li>Génération aléatoire d’une permutation de {"\\(n\\)"} éléments (algorithme de Fisher-Yates) ;</li>
          <li>Génération des parties à {"\\(k\\)"} éléments (méthode par combinatoire lexicographique).</li>
        </ul>
      </div>
    </>
  );
}
