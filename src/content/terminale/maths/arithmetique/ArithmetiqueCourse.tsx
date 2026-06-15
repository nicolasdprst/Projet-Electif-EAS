import React from 'react';

export default function ArithmetiqueCourse() {
  return (
    <>
      <h2 className="section-title" id="section1">1. Divisibilité</h2>

      <h3 className="subsection-title" id="subsection1.1">1.1. Division euclidienne</h3>
      
      <div className="box proposition-box">
        <h4>Théorème 1.</h4>
        <p className="course-text">Soient {"\\(a \\in\\mathbb{Z}\\)"}, {"\\(b\\in\\mathbb{Z}^*\\)"}. Il existe un unique couple d'entiers {"\\((q,r)\\)"} tel que {"\\(a=bq+r\\)"} avec {"\\(0 \\leq r < |b|\\)"}.</p>
      </div>
      
      <div className="box proof-box">
        <details>
          <summary>Preuve</summary>
          <p className="course-text"><strong>Unicité :</strong> Si {"\\(bq+r=bq'+r'\\)"}, alors {"\\(b(q-q')=r'-r\\)"}. Donc {"\\(|b||q-q'|=|r'-r|<|b|\\)"}, ce qui force {"\\(|q-q'|<1\\)"} donc {"\\(q=q'\\)"} and {"\\(r=r'\\)"}.</p>
          <p className="course-text"><strong>Existence :</strong> On considère l'ensemble des {"\\(a-bk \\geq 0\\)"} et on prend le plus petit élément (reste).</p>
        </details>
      </div>

      <div className="box definition-box">
        <h4>Définition 1.</h4>
        <p className="course-text">{"\\(b\\)"} divise {"\\(a\\)"} (noté {"\\(b|a\\)"}) s'il existe {"\\(k \\in\\mathbb{Z}\\)"} tel que {"\\(a=bk\\)"}.</p>
      </div>

      <div className="box proposition-box">
        <h4>Théorème 3. Propriétés</h4>
        <p className="course-text"><strong>1.</strong> Si {"\\(a|b\\)"} et {"\\(c|d\\)"} alors {"\\(ac|bd\\)"}.<br/>
        <strong>2.</strong> Si {"\\(a|b\\)"} et {"\\(a|c\\)"} alors {"\\(a|bu+cv\\)"} pour tout {"\\(u,v\\)"}.</p>
      </div>

      <h3 className="subsection-title" id="subsection1.2">1.2. Congruence</h3>

      <div className="box definition-box">
        <h4>Définition 2.</h4>
        <p className="course-text">{"\\(a \\equiv b\\ [n]\\)"} si {"\\(n\\)"} divise {"\\(b-a\\)"}.</p>
      </div>

      <div className="box proposition-box">
        <h4>Théorème 4. Propriétés</h4>
        <p className="course-text">La congruence est compatible avec l'addition et la multiplication.</p>
      </div>
      
      <div className="box attention-box">
        <p className="course-text"><strong>ATTENTION :</strong> On ne peut pas diviser par un même nombre les deux membres d'une congruence sans précaution !</p>
      </div>

      <h2 className="section-title" id="section2">2. PGCD : Les bases</h2>
      
      <div className="box definition-box">
        <h4>Définition 4.</h4>
        <p className="course-text">Le pgcd de {"\\(a\\)"} et {"\\(b\\)"} est le plus grand diviseur commun positif. Note : {"\\(a \\wedge b\\)"}.</p>
      </div>

      <div className="box proposition-box">
        <h4>Théorème 5. Lemme d'Euclide</h4>
        <p className="course-text">Si {"\\(a=bq+r\\)"}, alors {"\\(a\\wedge b = b\\wedge r\\)"}.</p>
      </div>

      <div className="box remarque">
        <p className="course-text"><strong>Algorithme d'Euclide :</strong> On répète les divisions jusqu'à obtenir un reste nul. Le dernier reste non nul est le PGCD.</p>
      </div>

      <h2 className="section-title" id="section3">3. Éléments premiers entre eux</h2>
      
      <div className="box definition-box">
        <h4>Définition 5.</h4>
        <p className="course-text">{"\\(a\\)"} et {"\\(b\\)"} sont premiers entre eux si {"\\(a\\wedge b=1\\)"}.</p>
      </div>
      
      <div className="box proposition-box">
        <h4>Théorème 7. Théorème de Bézout</h4>
        <p className="course-text">{"\\(a\\)"} et {"\\(b\\)"} sont premiers entre eux si et seulement s'il existe {"\\(u,v\\in\\mathbb{Z}\\)"} tels que {"\\(au+bv=1\\)"}.</p>
      </div>

      <div className="box remark-box">
        <h4>Point méthode.</h4>
        <p className="course-text">Pour trouver {"\\(u,v\\)"}, on remonte l'algorithme d'Euclide.</p>
      </div>
      
      <div className="box proposition-box">
        <h4>Théorème 8. Théorème de Gauss</h4>
        <p className="course-text">Si {"\\(a|bc\\)"} et {"\\(a\\wedge b=1\\)"} alors {"\\(a|c\\)"}.</p>
      </div>

      <div className="box proposition-box">
        <h4>Théorème 9. Conséquences</h4>
        <p className="course-text"><strong>1.</strong> Si {"\\(a\\wedge b=1\\)"} et {"\\(a\\wedge c=1\\)"} alors {"\\(a\\wedge bc=1\\)"}.<br/>
        <strong>2.</strong> Si {"\\(b\\wedge c=1\\)"}, {"\\(b|a\\)"} et {"\\(c|a\\)"} alors {"\\(bc|a\\)"}.</p>
      </div>
      
      <h2 className="section-title" id="section4">4. PGCD : Les propriétés utiles</h2>
      
      <div className="box proposition-box">
        <h4>Propriétés.</h4>
        <p className="course-text"><strong>1.</strong> {"\\(b|a \\iff a \\wedge b = |b|\\)"}.<br/>
        <strong>2.</strong> {"\\(a \\wedge 0 = |a|\\)"} and {"\\(a \\wedge 1 = 1\\)"}.</p>
      </div>

      <h2 className="section-title" id="section5">5. PPCM (Hors Programme)</h2>
      
      <div className="box definition-box">
        <h4>Définition 6.</h4>
        <p className="course-text">Le PPCM de {"\\(a\\)"} et {"\\(b\\)"} est le plus petit commun multiple positif. Note : {"\\(a \\vee b\\)"}.</p>
      </div>
      
      <div className="box proposition-box">
        <h4>Théorème 10. Propriété</h4>
        <p className="course-text">{"\\[ (a\\wedge b) \\times (a\\vee b) = |ab| \\]"}</p>
      </div>
      
      <h2 className="section-title" id="section6">6. Nombres premiers</h2>
      
      <div className="box definition-box">
        <h4>Définition 7.</h4>
        <p className="course-text">{"\\(p\\)"} est premier si {"\\(p \\geq 2\\)"} and ses seuls diviseurs positifs sont 1 et lui-même.</p>
      </div>
      
      <div className="box proposition-box">
        <h4>Théorème 11. Propriétés</h4>
        <p className="course-text"><strong>1.</strong> Tout entier {"\\(n \\geq 2\\)"} possède un diviseur premier.<br/>
        <strong>2.</strong> L'ensemble des nombres premiers est infini.<br/>
        <strong>3.</strong> Si {"\\(p\\)"} est premier et {"\\(p|nm\\)"} alors {"\\(p|n\\)"} ou {"\\(p|m\\)"}.</p>
      </div>
      
      <div className="box proposition-box">
        <h4>Théorème 12. Petit théorème de Fermat</h4>
        <p className="course-text">Soit {"\\(p\\)"} premier. Pour tout entier {"\\(n\\)"}, {"\\(n^p \\equiv n\\ [p]\\)"}.<br/>
        Si {"\\(p\\)"} ne divise pas {"\\(n\\)"}, alors {"\\(n^{p-1} \\equiv 1\\ [p]\\)"}.</p>
      </div>

      <div className="box proposition-box">
        <h4>Théorème 13. Décomposition en facteurs premiers</h4>
        <p className="course-text">Tout entier {"\\(n \\geq 2\\)"} se décompose de manière unique (à l'ordre près) en produit de facteurs premiers : {"\\[ n = p_1^{\\alpha_1} \\times \\dots \\times p_m^{\\alpha_m} \\]"}</p>
      </div>
    </>
  );
}
