<?php

namespace App\ManagerBundle\Entities\Model;

use App\SourceBundle\Base\Model;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * App\ManagerBundle\Entities\Model\Addon
 *
 * @ORM\Table(name="addons")
 * @ORM\Entity(repositoryClass="App\ManagerBundle\Entities\Repository\Addon")
 */
class Addon extends Model
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

	/**
	 * @var string
	 *
	 * @Assert\NotBlank()
	 * @ORM\Column(type="string", length=255)
	 */
	private $addon;

	/**
	 * @var string
	 *
	 * @Assert\NotBlank()
	 * @ORM\Column(type="text")
	 */
	private $description;


    /**
     * Get id
     *
     * @return integer 
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set addon
     *
     * @param string $addon
     * @return Addon
     */
    public function setAddon($addon)
    {
        $this->addon = $addon;

        return $this;
    }

    /**
     * Get addon
     *
     * @return string 
     */
    public function getAddon()
    {
        return $this->addon;
    }

    /**
     * Set description
     *
     * @param string $description
     * @return Addon
     */
    public function setDescription($description)
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Get description
     *
     * @return string 
     */
    public function getDescription()
    {
        return $this->description;
    }
}